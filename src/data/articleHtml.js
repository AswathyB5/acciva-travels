import DOMPurify from "dompurify";

// Blog post "Full Content" is stored as sanitized HTML, authored through the
// admin's WYSIWYG editor (RichTextEditor.jsx). Both the editor's own output
// and the public blog post page run every value through this before it
// touches the DOM, so a compromised admin account (or a bad paste) can't
// inject a script into every visitor's browser.
const ALLOWED_TAGS = [
  "p", "br", "strong", "b", "em", "i", "u", "s", "a",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "ul", "ol", "li", "blockquote", "span", "div",
];
const ALLOWED_ATTR = ["href", "target", "rel", "style"];

let hookInstalled = false;
function ensureColorOnlyStyleHook() {
  if (hookInstalled) return;
  hookInstalled = true;
  // "style" is only ever used here for text color (the color picker uses
  // execCommand("foreColor")) — strip every other CSS property so a paste
  // or crafted value can't smuggle in position/overlay-style CSS.
  DOMPurify.addHook("uponSanitizeAttribute", (node, data) => {
    if (data.attrName !== "style") return;
    const match = /(?<!background-)(?:^|;)\s*color\s*:\s*(#[0-9a-fA-F]{3,8}|rgb\([^)]*\)|[a-zA-Z]+)/i.exec(
      data.attrValue
    );
    data.attrValue = match ? `color: ${match[1]}` : "";
  });
}

const BLOCK_CONTENT_SELECTOR = "p, ul, ol, blockquote";

// A heading (h1–h6) may only contain phrasing content — never a <p>, list,
// or blockquote. That rule isn't just cosmetic: content pasted from some
// external sources (Word/Docs exports, other CMSs, or content authored
// before this editor existed) can arrive with an entire block of paragraphs
// wrongly wrapped inside a heading tag. When that happens, every one of
// those paragraphs inherits the heading's (much larger) font size, while
// the real heading right above it stops looking distinct — which reads as
// "the sizes/colors are all inconsistent" even though the CSS rules
// themselves are correct. This repairs that structure on every render: for
// each heading, everything from its first illegal block-level child onward
// is moved out to become a sibling immediately after the heading, and a
// heading left with no text of its own is removed entirely.
function fixHeadingsWithBlockContent(container) {
  container.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
    const children = Array.from(heading.childNodes);
    const splitIndex = children.findIndex(
      (child) =>
        child.nodeType === 1 &&
        (child.matches(BLOCK_CONTENT_SELECTOR) || child.querySelector(BLOCK_CONTENT_SELECTOR))
    );
    if (splitIndex === -1) return;

    const nextSibling = heading.nextSibling;
    children.slice(splitIndex).forEach((node) => {
      heading.parentNode.insertBefore(node, nextSibling);
    });
    if (!heading.textContent.trim()) {
      heading.remove();
    }
  });
}

// The browser's own list-command (execCommand("insertUnorderedList"/
// "insertOrderedList")) can leave a <ul>/<ol> wrapped in a <p> in the live
// contentEditable DOM — invalid, since a <p> can't contain block content.
// Re-parsing that (which both DOMPurify and the innerHTML assignment below
// do) auto-splits it per the HTML parsing algorithm, but leaves the now
//-empty <p></p> tags behind as debris immediately before/after the list.
// Left in place, each one adds its own blank-paragraph spacing around every
// list. A <p> with zero child nodes (not even a <br>) is never meaningful
// content — real blank lines a person typed always contain a <br> — so
// it's always safe to drop.
function removeEmptyParagraphDebris(container) {
  container.querySelectorAll("p").forEach((p) => {
    if (p.childNodes.length === 0) p.remove();
  });
}

export function sanitizeArticleHtml(html) {
  ensureColorOnlyStyleHook();
  const cleaned = DOMPurify.sanitize(html || "", { ALLOWED_TAGS, ALLOWED_ATTR });
  if (typeof document === "undefined" || !cleaned) return cleaned;

  const container = document.createElement("div");
  container.innerHTML = cleaned;
  fixHeadingsWithBlockContent(container);
  removeEmptyParagraphDebris(container);
  return container.innerHTML;
}
