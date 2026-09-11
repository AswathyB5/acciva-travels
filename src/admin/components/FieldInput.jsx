import { useEffect, useRef, useState } from "react";
import { X, Plus, Upload, ChevronUp, ChevronDown } from "lucide-react";
import { api } from "../lib/api";
import RichTextEditor from "./RichTextEditor";

const baseInputClass =
  "w-full rounded-xl border border-navy/15 px-3.5 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-colors";

const ImageField = ({ value, onChange }) => {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      const { url } = await api.uploadImage(file);
      onChange(url);
    } catch (err) {
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          className={baseInputClass}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://... or upload a file"
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="shrink-0 inline-flex items-center gap-1.5 px-3.5 rounded-xl border border-navy/15 text-navy/75 hover:bg-navy/5 text-xs font-semibold disabled:opacity-50"
        >
          <Upload size={14} />
          {uploading ? "Uploading..." : "Upload"}
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {value && (
        <img
          src={value}
          alt="Preview"
          className="h-24 w-40 object-cover rounded-xl border border-navy/10"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
    </div>
  );
};

// Lets an editor pick specific items out of another admin-managed collection
// (e.g. choose which Services show on the Home page) and control their order,
// instead of always showing "the first N" from that collection.
const CollectionPickerField = ({ field, value, onChange }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const selected = Array.isArray(value) ? value : [];
  const optionLabel = field.optionLabel || "title";
  const optionValue = field.optionValue || "slug";

  useEffect(() => {
    let cancelled = false;
    api
      .list(field.collection)
      .then((data) => {
        if (!cancelled) setItems(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || "Couldn't load options");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [field.collection]);

  const labelFor = (val) => items.find((it) => it[optionValue] === val)?.[optionLabel] || val;

  const toggle = (val, checked) => {
    if (checked) onChange([...selected, val]);
    else onChange(selected.filter((v) => v !== val));
  };

  const move = (index, dir) => {
    const target = index + dir;
    if (target < 0 || target >= selected.length) return;
    const copy = [...selected];
    [copy[index], copy[target]] = [copy[target], copy[index]];
    onChange(copy);
  };

  if (loading) return <p className="text-xs text-navy/50">Loading options...</p>;
  if (error) return <p className="text-xs text-red-600">{error}</p>;

  return (
    <div className="space-y-3">
      {selected.length > 0 && (
        <div className="space-y-1.5">
          {selected.map((val, i) => (
            <div
              key={val}
              className="flex items-center justify-between gap-2 rounded-lg border border-teal/30 bg-teal/5 px-3 py-1.5"
            >
              <span className="text-xs font-semibold text-navy">{labelFor(val)}</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  className="w-6 h-6 rounded-md border border-navy/15 text-navy/60 hover:bg-navy/5 disabled:opacity-25 flex items-center justify-center"
                  title="Move up"
                >
                  <ChevronUp size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => move(i, 1)}
                  disabled={i === selected.length - 1}
                  className="w-6 h-6 rounded-md border border-navy/15 text-navy/60 hover:bg-navy/5 disabled:opacity-25 flex items-center justify-center"
                  title="Move down"
                >
                  <ChevronDown size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => toggle(val, false)}
                  className="w-6 h-6 rounded-md border border-red-200 text-red-500 hover:bg-red-50 flex items-center justify-center"
                  title="Remove"
                >
                  <X size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="rounded-xl border border-navy/15 p-3 max-h-56 overflow-y-auto space-y-1.5 bg-ivory/40">
        {items.length === 0 && <p className="text-xs text-navy/50">No items in this collection yet.</p>}
        {items.map((it) => {
          const val = it[optionValue];
          const checked = selected.includes(val);
          return (
            <label key={val} className="flex items-center gap-2 text-xs text-navy/80 cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => toggle(val, e.target.checked)}
                className="accent-teal"
              />
              {it[optionLabel]}
            </label>
          );
        })}
      </div>
    </div>
  );
};

const FieldInput = ({ field, value, onChange }) => {
  if (field.type === "richtext") {
    return <RichTextEditor value={value} onChange={onChange} />;
  }

  if (field.type === "textarea") {
    return (
      <textarea
        className={`${baseInputClass} min-h-28 leading-relaxed`}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  if (field.type === "number") {
    return (
      <input
        type="number"
        className={baseInputClass}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select className={baseInputClass} value={value || ""} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>
          Select...
        </option>
        {field.options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }

  // Dropdown of suggested values that also accepts a free-typed new one —
  // e.g. blog categories: pick an existing one, or type a brand new category.
  if (field.type === "combo") {
    const listId = `combo-${field.name}`;
    return (
      <>
        <input
          list={listId}
          className={baseInputClass}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder || "Select or type a new value..."}
        />
        <datalist id={listId}>
          {(field.options || []).map((opt) => (
            <option key={opt} value={opt} />
          ))}
        </datalist>
      </>
    );
  }

  if (field.type === "list") {
    const items = Array.isArray(value) ? value : [];
    const updateAt = (index, next) => {
      const copy = [...items];
      copy[index] = next;
      onChange(copy);
    };
    const removeAt = (index) => onChange(items.filter((_, i) => i !== index));

    return (
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              className={baseInputClass}
              value={item}
              onChange={(e) => updateAt(i, e.target.value)}
            />
            <button
              type="button"
              onClick={() => removeAt(i)}
              className="w-10 shrink-0 rounded-xl border border-navy/15 text-navy/55 hover:bg-red-50 hover:text-red-500 hover:border-red-200 flex items-center justify-center transition-colors"
              title="Remove"
            >
              <X size={15} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...items, ""])}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:opacity-80"
        >
          <Plus size={13} />
          Add item
        </button>
      </div>
    );
  }

  if (field.type === "cards") {
    const items = Array.isArray(value) ? value : [];
    const blankItem = () =>
      Object.fromEntries(field.itemFields.map((f) => [f.name, f.type === "number" ? 0 : ""]));
    const updateItemField = (index, name, next) => {
      const copy = items.map((it, i) => (i === index ? { ...it, [name]: next } : it));
      onChange(copy);
    };
    const removeAt = (index) => onChange(items.filter((_, i) => i !== index));
    const moveItem = (index, dir) => {
      const target = index + dir;
      if (target < 0 || target >= items.length) return;
      const copy = [...items];
      [copy[index], copy[target]] = [copy[target], copy[index]];
      onChange(copy);
    };

    return (
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-navy/15 p-4 space-y-3 bg-ivory/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-navy/68">
                {field.itemLabel || "Item"} {i + 1}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => moveItem(i, -1)}
                  disabled={i === 0}
                  className="w-7 h-7 rounded-lg border border-navy/15 text-navy/68 hover:bg-navy/5 disabled:opacity-25 flex items-center justify-center text-xs"
                  title="Move up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => moveItem(i, 1)}
                  disabled={i === items.length - 1}
                  className="w-7 h-7 rounded-lg border border-navy/15 text-navy/68 hover:bg-navy/5 disabled:opacity-25 flex items-center justify-center text-xs"
                  title="Move down"
                >
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() => removeAt(i)}
                  className="w-7 h-7 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 flex items-center justify-center"
                  title="Remove"
                >
                  <X size={13} />
                </button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {field.itemFields.map((sub) => (
                <div key={sub.name} className={sub.type === "textarea" ? "sm:col-span-2" : ""}>
                  <label className="block text-[11px] font-semibold text-navy/68 mb-1">{sub.label}</label>
                  <FieldInput
                    field={sub}
                    value={item[sub.name]}
                    onChange={(v) => updateItemField(i, sub.name, v)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...items, blankItem()])}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:opacity-80"
        >
          <Plus size={13} />
          Add {(field.itemLabel || "item").toLowerCase()}
        </button>
      </div>
    );
  }

  if (field.type === "image") {
    return <ImageField value={value} onChange={onChange} />;
  }

  if (field.type === "collection-picker") {
    return <CollectionPickerField field={field} value={value} onChange={onChange} />;
  }

  return (
    <input className={baseInputClass} value={value || ""} onChange={(e) => onChange(e.target.value)} />
  );
};

export default FieldInput;
