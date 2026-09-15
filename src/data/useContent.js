import { useEffect, useState } from "react";
import { api } from "../admin/lib/api";

// Last-known-good content cache, so a returning visitor sees the real
// admin-edited content immediately instead of the hardcoded fallback while
// the network request is in flight (stale-while-revalidate). In-memory first
// (fastest, survives client-side route changes within the session), with
// localStorage as a best-effort backup across full page reloads. Never
// throws: storage can be unavailable (private browsing, quota) and that must
// not break the page.
const memoryCache = new Map();
const CACHE_PREFIX = "accivaContentCache:";

function getCached(key) {
  if (memoryCache.has(key)) return memoryCache.get(key);
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    if (raw) {
      const parsed = JSON.parse(raw);
      memoryCache.set(key, parsed);
      return parsed;
    }
  } catch {
    // storage unavailable or corrupt — fall through to no cache
  }
  return undefined;
}

function setCached(key, value) {
  memoryCache.set(key, value);
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(value));
  } catch {
    // best-effort only; in-memory cache still works for this session
  }
}

// Fetches a content collection from the admin API. Falls back to the given
// static array (e.g. from content.js) if the API is unreachable, so pages
// keep working before the backend/DB is configured.
export function useCollection(collection, fallback = [], retryToken = 0) {
  const cacheKey = `list:${collection}`;
  const cached = getCached(cacheKey);
  const hasCached = Array.isArray(cached) && cached.length > 0;
  const [items, setItems] = useState(hasCached ? cached : fallback);
  const [loading, setLoading] = useState(!hasCached);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    // Resets loading/error state on every (re)fetch — including a manual
    // retry via retryToken, which is the whole point of this effect rerunning.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(!hasCached);
    setError(false);
    api
      .list(collection)
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setItems(data);
          setCached(cacheKey, data);
        }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const cacheKey = `item:${collection}:${slug}`;
  const cached = getCached(cacheKey);
  const fallbackItem = fallbackList.find((it) => it.slug === slug) || null;
  const [item, setItem] = useState(cached || fallbackItem);
  const [loading, setLoading] = useState(!cached);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(!cached);
    setError(false);
    if (!slug) {
      setLoading(false);
      return undefined;
    }
    api
      .getBySlug(collection, slug)
      .then((data) => {
        if (!cancelled && data) {
          setItem(data);
          setCached(cacheKey, data);
        }
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
  const cacheKey = `page:${page}`;
  const cached = getCached(cacheKey);
  const [data, setData] = useState(cached ? { ...defaults, ...cached } : defaults);
  const [loading, setLoading] = useState(!cached);

  useEffect(() => {
    let cancelled = false;
    api
      .getPageContent(page)
      .then((remote) => {
        if (!cancelled) {
          setData({ ...defaults, ...remote });
          setCached(cacheKey, remote);
        }
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
