import { useEffect } from "react";

const SITE_NAME = "Acciva Travels";

const setMetaTag = (attr, value, content) => {
  let tag = document.querySelector(`meta[${attr}="${value}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, value);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setLinkTag = (rel, href) => {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

// Sets per-page <title>/meta description/canonical without a helmet dependency;
// restores the previous title on unmount so route changes don't leak stale tags.
const Seo = ({ title, description, canonical }) => {
  useEffect(() => {
    const previousTitle = document.title;

    if (title) document.title = `${title} | ${SITE_NAME}`;
    if (description) setMetaTag("name", "description", description);
    if (canonical) setLinkTag("canonical", canonical);

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, canonical]);

  return null;
};

export default Seo;
