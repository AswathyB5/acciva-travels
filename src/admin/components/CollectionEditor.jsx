import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown, Inbox } from "lucide-react";
import { api } from "../lib/api";
import { getCollectionConfig } from "../collectionsConfig";
import ItemForm from "./ItemForm";

const CollectionEditor = () => {
  const { key } = useParams();
  const config = getCollectionConfig(key);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(null); // null = closed, {} = new, item = edit
  const [busyId, setBusyId] = useState(null);

  const load = () => {
    setLoading(true);
    api
      .list(key)
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    Promise.resolve().then(() => {
      setEditing(null);
      load();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  if (!config) return <p>Unknown content type.</p>;

  const Icon = config.icon;

  const handleSave = async (draft) => {
    if (draft._id) {
      await api.update(key, draft._id, draft);
    } else {
      await api.create(key, draft);
    }
    setEditing(null);
    load();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this entry? This cannot be undone.")) return;
    setBusyId(id);
    try {
      await api.remove(key, id);
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  };

  const move = async (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    setItems(next);
    await api.reorder(key, next.map((it) => it._id));
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
            <Icon size={20} />
          </div>
          <div>
            <h1 className="font-display font-bold text-navy text-xl">{config.label}</h1>
            <p className="text-xs text-navy/62">
              {loading ? "Loading..." : `${items.length} ${items.length === 1 ? "entry" : "entries"}`}
            </p>
          </div>
        </div>
        {!editing && (
          <button
            onClick={() => setEditing({})}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm shrink-0"
          >
            <Plus size={16} />
            Add {config.singular}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5 mt-4">
          {error}
        </p>
      )}

      {editing !== null && (
        <div className="mt-6">
          <ItemForm config={config} item={editing} onCancel={() => setEditing(null)} onSave={handleSave} />
        </div>
      )}

      {loading ? (
        <div className="mt-6 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 rounded-2xl bg-navy/5 animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="mt-6 bg-white rounded-2xl border border-dashed border-navy/15 py-14 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-3">
            <Inbox size={20} className="text-navy/45" />
          </div>
          <p className="text-navy/75 text-sm font-medium">Nothing here yet.</p>
          <p className="text-navy/55 text-xs mt-1">Add your first {config.singular.toLowerCase()} to get started.</p>
        </div>
      ) : (
        <ul className="mt-6 space-y-2.5">
          {items.map((item, i) => (
            <li
              key={item._id}
              className="bg-white rounded-2xl border border-navy/10 px-4 py-3 flex items-center gap-4 hover:border-navy/20 transition-colors"
            >
              {config.imageField && item[config.imageField] ? (
                <img
                  src={item[config.imageField]}
                  alt=""
                  className="w-12 h-12 rounded-xl object-cover border border-navy/10 shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.visibility = "hidden";
                  }}
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-navy truncate">{item[config.titleField]}</p>
                {config.subtitleField && item[config.subtitleField] && (
                  <p className="text-xs text-navy/62 truncate mt-0.5">{item[config.subtitleField]}</p>
                )}
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  className="w-8 h-8 rounded-lg border border-navy/10 text-navy/68 hover:bg-navy/5 disabled:opacity-25 flex items-center justify-center"
                  title="Move up"
                >
                  <ArrowUp size={14} />
                </button>
                <button
                  onClick={() => move(i, 1)}
                  disabled={i === items.length - 1}
                  className="w-8 h-8 rounded-lg border border-navy/10 text-navy/68 hover:bg-navy/5 disabled:opacity-25 flex items-center justify-center"
                  title="Move down"
                >
                  <ArrowDown size={14} />
                </button>
                <button
                  onClick={() => setEditing(item)}
                  className="w-8 h-8 rounded-lg border border-navy/10 text-navy/75 hover:bg-teal/10 hover:text-teal hover:border-teal/30 flex items-center justify-center"
                  title="Edit"
                >
                  <Pencil size={14} />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  disabled={busyId === item._id}
                  className="w-8 h-8 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 disabled:opacity-50 flex items-center justify-center"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollectionEditor;
