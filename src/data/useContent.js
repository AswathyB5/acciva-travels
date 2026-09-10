import { useEffect, useState } from "react";
import { api } from "../admin/lib/api";

// Fetches a content collection from the admin API. Falls back to the given
// static array (e.g. from content.js) if the API is unreachable, so pages
// keep working before the backend/DB is configured.
export function useCollection(collection, fallback = []) {
  const [items, setItems] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    api
      .list(collection)
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) setItems(data);
      })
      .catch(() => {
        // keep fallback
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [collection]);

  return { items, loading };
}

// Fetches editable free-text copy for a page (headings, blurbs, etc). Falls
// back to the given defaults if the API is unreachable or fields are unset.
export function usePageContent(page, defaults = {}) {
  const [data, setData] = useState(defaults);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    api
      .getPageContent(page)
      .then((remote) => {
        if (!cancelled) setData({ ...defaults, ...remote });
      })
      .catch(() => {
        // keep defaults
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return { data, loading };
}
