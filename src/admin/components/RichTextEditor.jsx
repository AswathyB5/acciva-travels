import { useEffect, useRef, useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  Link2,
  List,
  ListOrdered,
  Quote,
  Palette,
  Unlink,
  X,
  Check,
} from "lucide-react";
import { sanitizeArticleHtml } from "../../data/articleHtml";

const HEADING_OPTIONS = [
  { value: "P", label: "Paragraph" },
  { value: "H1", label: "Heading 1" },
  { value: "H2", label: "Heading 2" },
  { value: "H3", label: "Heading 3" },
  { value: "H4", label: "Heading 4" },
  { value: "H5", label: "Heading 5" },
  { value: "H6", label: "Heading 6" },
];

const COLOR_SWATCHES = ["#192a3a", "#3b8dc4", "#e1c59d", "#dc2626", "#16a34a", "#7c3aed"];

// Content pasted from Word, Google Docs, or another webpage very often
// expresses "bold"/"italic"/"underline" as inline CSS on a <span>/<div>
// rather than a real <strong>/<em>/<u> tag. The sanitizer only ever keeps
// `color` out of a style attribute (everything else is stripped for
// security), so without this pass that formatting would silently vanish on
// paste. This walks the pasted fragment and swaps CSS-only formatting for
// the equivalent semantic tag before it ever reaches the sanitizer.
const BOLD_STYLE_RE = /font-weight\s*:\s*(bold|[6-9]00)/i;
const ITALIC_STYLE_RE = /font-style\s*:\s*italic/i;
const UNDERLINE_STYLE_RE = /text-decoration[a-z-]*\s*:\s*[^;]*underline/i;

function normalizePastedFormatting(root) {
  const toWrap = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let node = walker.currentNode;
  while (node) {
    const style = node.getAttribute && node.getAttribute("style");
    if (style) {
      if (BOLD_STYLE_RE.test(style) && !["STRONG", "B"].includes(node.tagName)) {
        toWrap.push({ node, tag: "strong" });
      }
      if (ITALIC_STYLE_RE.test(style) && !["EM", "I"].includes(node.tagName)) {
        toWrap.push({ node, tag: "em" });
      }
      if (UNDERLINE_STYLE_RE.test(style) && node.tagName !== "U") {
        toWrap.push({ node, tag: "u" });
      }
    }
    node = walker.nextNode();
  }
  toWrap.forEach(({ node, tag }) => {
    const wrapper = document.createElement(tag);
    while (node.firstChild) wrapper.appendChild(node.firstChild);
    node.appendChild(wrapper);
  });
  return root.innerHTML;
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// A CMS-style WYSIWYG editor for long-form content (blog posts): headings
// actually render at heading size while you type (not "## " symbols in a
// textarea), and Bold/Italic/color/links apply live. Content is stored and
// rendered as sanitized HTML, so what you see here is exactly what the
// public blog post page will show.
const RichTextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const toolbarRef = useRef(null);
  const savedRangeRef = useRef(null);
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [colorOpen, setColorOpen] = useState(false);
  const [activeMarks, setActiveMarks] = useState({ bold: false, italic: false, underline: false });

  // Keep the live DOM in sync with external value changes (e.g. switching
  // between items in the collection editor) without fighting the user's
  // own typing — only touch innerHTML when it actually differs.
  useEffect(() => {
    // Chrome/Edge default to wrapping new lines in a bare <div> on Enter
    // unless told otherwise — force real <p> paragraphs instead, matching
    // both the "Paragraph" format option and how the public page expects
    // its content to be structured.
    document.execCommand("defaultParagraphSeparator", false, "p");
    if (editorRef.current) {
      const initial = value || "<p><br></p>";
      if (editorRef.current.innerHTML !== initial) {
        editorRef.current.innerHTML = initial;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateActiveMarks = () => {
    setActiveMarks({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
    });
  };

  const emitChange = () => {
    if (!editorRef.current) return;
    onChange(sanitizeArticleHtml(editorRef.current.innerHTML));
  };

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0 && editorRef.current?.contains(sel.anchorNode)) {
      savedRangeRef.current = sel.getRangeAt(0).cloneRange();
    }
    updateActiveMarks();
  };

  const restoreSelection = () => {
    const range = savedRangeRef.current;
    if (!range) return;
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const exec = (command, arg) => {
    editorRef.current?.focus();
    restoreSelection();
    document.execCommand(command, false, arg);
    emitChange();
    updateActiveMarks();
  };

  const applyHeading = (tag) => {
    exec("formatBlock", `<${tag}>`);
  };

  const openLinkPopover = () => {
    saveSelection();
    const sel = window.getSelection();
    setLinkUrl(sel && !sel.isCollapsed ? "" : "");
    setColorOpen(false);
    setLinkOpen(true);
  };

  const applyLink = () => {
    if (!linkUrl.trim()) return;
    const url = /^https?:\/\//i.test(linkUrl.trim()) ? linkUrl.trim() : `https://${linkUrl.trim()}`;
    exec("createLink", url);
    setLinkOpen(false);
    setLinkUrl("");
  };

  const handlePaste = (e) => {
    e.preventDefault();
    editorRef.current?.focus();

    const clipboard = e.clipboardData;
    const html = clipboard?.getData("text/html");
    const text = clipboard?.getData("text/plain") || "";

    let toInsert;
    if (html) {
      const container = document.createElement("div");
      container.innerHTML = html;
      toInsert = normalizePastedFormatting(container);
    } else {
      toInsert = text
        .split(/\r?\n/)
        .map((line) => `<p>${escapeHtml(line) || "<br>"}</p>`)
        .join("");
    }

    document.execCommand("insertHTML", false, toInsert);
    emitChange();
  };

  const applyColor = (color) => {
    editorRef.current?.focus();
    restoreSelection();
    // Force span+style output instead of the legacy <font color> tag most
    // browsers default to — the sanitizer only allows "style" attributes
    // (scoped to color), so a <font> tag would otherwise get stripped and
    // silently lose the color.
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("foreColor", false, color);
    document.execCommand("styleWithCSS", false, false);
    emitChange();
    setColorOpen(false);
  };

  return (
    <div className="rounded-xl border border-navy/15 overflow-visible bg-white">
      <div ref={toolbarRef} className="flex items-center gap-1 px-2 py-1.5 border-b border-navy/10 bg-ivory/60 flex-wrap relative">
        <select
          onMouseDown={saveSelection}
          onChange={(e) => {
            restoreSelection();
            applyHeading(e.target.value);
          }}
          defaultValue="P"
          className="h-8 rounded-lg border border-navy/15 bg-white text-xs font-semibold text-navy/70 px-2 focus:outline-none focus:border-teal cursor-pointer"
          title="Heading level"
        >
          {HEADING_OPTIONS.map((h) => (
            <option key={h.value} value={h.value}>
              {h.label}
            </option>
          ))}
        </select>

        <div className="w-px h-5 bg-navy/10 mx-1" />

        <button
          type="button"
          title="Bold"
          onMouseDown={(e) => {
            e.preventDefault();
            saveSelection();
            exec("bold");
          }}
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            activeMarks.bold ? "bg-teal/15 text-teal" : "text-navy/60 hover:bg-navy/8 hover:text-navy"
          }`}
        >
          <Bold size={15} />
        </button>
        <button
          type="button"
          title="Italic"
          onMouseDown={(e) => {
            e.preventDefault();
            saveSelection();
            exec("italic");
          }}
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            activeMarks.italic ? "bg-teal/15 text-teal" : "text-navy/60 hover:bg-navy/8 hover:text-navy"
          }`}
        >
          <Italic size={15} />
        </button>
        <button
          type="button"
          title="Underline"
          onMouseDown={(e) => {
            e.preventDefault();
            saveSelection();
            exec("underline");
          }}
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            activeMarks.underline ? "bg-teal/15 text-teal" : "text-navy/60 hover:bg-navy/8 hover:text-navy"
          }`}
        >
          <Underline size={15} />
        </button>

        <div className="w-px h-5 bg-navy/10 mx-1" />

        <div className="relative">
          <button
            type="button"
            title="Text color"
            onMouseDown={(e) => {
              e.preventDefault();
              saveSelection();
              setLinkOpen(false);
              setColorOpen((o) => !o);
            }}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-navy/60 hover:bg-navy/8 hover:text-navy transition-colors"
          >
            <Palette size={15} />
          </button>
          {colorOpen && (
            <div className="absolute z-20 top-full left-0 mt-1.5 bg-white border border-navy/15 rounded-xl shadow-lg p-2.5 flex items-center gap-1.5">
              {COLOR_SWATCHES.map((c) => (
                <button
                  key={c}
                  type="button"
                  title={c}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => applyColor(c)}
                  className="w-6 h-6 rounded-full border border-navy/15 shrink-0"
                  style={{ backgroundColor: c }}
                />
              ))}
              <input
                type="color"
                onChange={(e) => applyColor(e.target.value)}
                className="w-6 h-6 rounded-full border border-navy/15 shrink-0 cursor-pointer p-0 bg-transparent"
                title="Custom color"
              />
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            title="Link"
            onMouseDown={(e) => {
              e.preventDefault();
              setColorOpen(false);
              openLinkPopover();
            }}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-navy/60 hover:bg-navy/8 hover:text-navy transition-colors"
          >
            <Link2 size={15} />
          </button>
          {linkOpen && (
            <div className="absolute z-20 top-full left-0 mt-1.5 bg-white border border-navy/15 rounded-xl shadow-lg p-2.5 flex items-center gap-1.5 w-72">
              <input
                autoFocus
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    applyLink();
                  }
                  if (e.key === "Escape") setLinkOpen(false);
                }}
                placeholder="https://example.com"
                className="flex-1 min-w-0 rounded-lg border border-navy/15 px-2.5 py-1.5 text-xs focus:outline-none focus:border-teal"
              />
              <button
                type="button"
                onClick={applyLink}
                className="w-7 h-7 rounded-lg bg-teal text-white flex items-center justify-center shrink-0"
                title="Apply link"
              >
                <Check size={14} />
              </button>
              <button
                type="button"
                onClick={() => setLinkOpen(false)}
                className="w-7 h-7 rounded-lg border border-navy/15 text-navy/50 flex items-center justify-center shrink-0"
                title="Cancel"
              >
                <X size={14} />
              </button>
            </div>
          )}
        </div>

        <button
          type="button"
          title="Remove link"
          onMouseDown={(e) => {
            e.preventDefault();
            saveSelection();
            exec("unlink");
          }}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-navy/60 hover:bg-navy/8 hover:text-navy transition-colors"
        >
          <Unlink size={15} />
        </button>

        <div className="w-px h-5 bg-navy/10 mx-1" />

        <button
          type="button"
          title="Bullet list"
          onMouseDown={(e) => {
            e.preventDefault();
            saveSelection();
            exec("insertUnorderedList");
          }}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-navy/60 hover:bg-navy/8 hover:text-navy transition-colors"
        >
          <List size={15} />
        </button>
        <button
          type="button"
          title="Numbered list"
          onMouseDown={(e) => {
            e.preventDefault();
            saveSelection();
            exec("insertOrderedList");
          }}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-navy/60 hover:bg-navy/8 hover:text-navy transition-colors"
        >
          <ListOrdered size={15} />
        </button>
        <button
          type="button"
          title="Quote"
          onMouseDown={(e) => {
            e.preventDefault();
            saveSelection();
            applyHeading("BLOCKQUOTE");
          }}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-navy/60 hover:bg-navy/8 hover:text-navy transition-colors"
        >
          <Quote size={15} />
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        data-placeholder="Write your post here — use the toolbar above for headings, bold, links, and color."
        onInput={emitChange}
        onPaste={handlePaste}
        onMouseUp={saveSelection}
        onKeyUp={saveSelection}
        onBlur={(e) => {
          saveSelection();
          // Don't close the color popover when focus is moving *into* it
          // (e.g. the native <input type="color"> swatch, which must take
          // focus to open its picker) — only when focus leaves the toolbar
          // entirely. Otherwise the popover unmounts before the native
          // color picker can open, and custom colors never apply.
          if (toolbarRef.current?.contains(e.relatedTarget)) return;
          setColorOpen(false);
        }}
        className="article-content blog-article px-4 py-3.5 min-h-56 max-h-112 overflow-y-auto text-slate-700 text-sm font-normal leading-relaxed focus:outline-none"
      />
    </div>
  );
};

export default RichTextEditor;
