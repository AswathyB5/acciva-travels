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

export function sanitizeArticleHtml(html) {
  ensureColorOnlyStyleHook();
  return DOMPurify.sanitize(html || "", { ALLOWED_TAGS, ALLOWED_ATTR });
}
