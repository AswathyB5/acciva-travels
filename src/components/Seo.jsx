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

const SCHEMA_TAG_ID = "seo-schema-markup";

// `schema` may be a JSON-LD object, or a raw JSON string (as edited in the
// admin panel) — invalid JSON is silently ignored rather than breaking the page.
const setSchemaTag = (schema) => {
  const existing = document.getElementById(SCHEMA_TAG_ID);
  if (existing) existing.remove();
  if (!schema) return;

  let data = schema;
  if (typeof schema === "string") {
    try {
      data = JSON.parse(schema);
    } catch {
      return;
    }
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = SCHEMA_TAG_ID;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Sets per-page <title>/meta description/canonical/JSON-LD schema without a
// helmet dependency; restores the previous title and removes the schema tag
// on unmount so route changes don't leak stale tags.
const Seo = ({ title, description, canonical, schema }) => {
  useEffect(() => {
    const previousTitle = document.title;

    if (title) document.title = `${title} | ${SITE_NAME}`;
    if (description) setMetaTag("name", "description", description);
    if (canonical) setLinkTag("canonical", canonical);
    setSchemaTag(schema);

    return () => {
      document.title = previousTitle;
      setSchemaTag(null);
    };
  }, [title, description, canonical, schema]);

  return null;
};

export default Seo;
