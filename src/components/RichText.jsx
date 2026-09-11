import { sanitizeArticleHtml } from "../data/articleHtml";

// Renders admin-authored rich text (paragraphs, bold/underline/color, links)
// from a "richtext" page-content field — sanitized the same way blog post
// content is, so an editor's formatting is safe to render anywhere on the
// site. `as` lets the caller keep using e.g. `motion.p` for its existing
// entrance animation; any other props (className, animation props, etc.)
// are forwarded straight through to that element.
const RichText = ({ html, as: As = "div", ...rest }) => (
  <As dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(html) }} {...rest} />
);

export default RichText;
