import { useEffect, useState } from "react";
import { api } from "../admin/lib/api";

// Fetches a content collection from the admin API. Falls back to the given
// static array (e.g. from content.js) if the API is unreachable, so pages
// keep working before the backend/DB is configured.
export function useCollection(collection, fallback = [], retryToken = 0) {
  const [items, setItems] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    // Resets loading/error state on every (re)fetch — including a manual
    // retry via retryToken, which is the whole point of this effect rerunning.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError(false);
    api
      .list(collection)
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) setItems(data);
      })
      .catch(() => {
        // keep fallback, but flag it so callers can tell "not found" apart from "couldn't check"
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [collection, retryToken]);

  return { items, loading, error };
}

// Fetches a single item from a collection by its `slug`, instead of
// downloading the entire collection just to find one record client-side —
// important for something like a blog post, where every OTHER post's full
// HTML content would otherwise be fetched and parsed just to display one
// article. Falls back to searching the given static fallback list by slug
// if the API is unreachable or the item genuinely doesn't exist there yet.
export function useCollectionItemBySlug(collection, slug, fallbackList = [], retryToken = 0) {
  const fallbackItem = fallbackList.find((it) => it.slug === slug) || null;
  const [item, setItem] = useState(fallbackItem);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError(false);
    if (!slug) {
      setLoading(false);
      return undefined;
    }
    api
      .getBySlug(collection, slug)
      .then((data) => {
        if (!cancelled && data) setItem(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, slug, retryToken]);

  return { item, loading, error };
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
