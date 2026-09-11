import { useState } from "react";
import { AlertCircle } from "lucide-react";
import FieldInput from "./FieldInput";

const emptyDraft = (fields) =>
  fields.reduce((acc, f) => {
    acc[f.name] = f.type === "list" ? [] : f.type === "number" ? 0 : "";
    return acc;
  }, {});

const ItemForm = ({ config, item, onCancel, onSave }) => {
  const [draft, setDraft] = useState(() => ({ ...emptyDraft(config.fields), ...item }));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const setField = (name, value) => setDraft((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const missing = config.fields.find((f) => f.required && !String(draft[f.name] || "").trim());
    if (missing) {
      setError(`${missing.label} is required.`);
      return;
    }
    setSaving(true);
    try {
      await onSave(draft);
    } catch (err) {
      setError(err.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-navy/10 shadow-sm p-6 space-y-5 mb-6"
    >
      <div className="flex items-center justify-between border-b border-navy/10 pb-4">
        <h2 className="font-display font-bold text-navy">
          {item?._id ? `Edit ${config.singular}` : `New ${config.singular}`}
        </h2>
        <span className="text-xs text-navy/55">Changes go live as soon as you save.</span>
      </div>

      {error && (
        <p className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5">
          <AlertCircle size={16} className="shrink-0" />
          {error}
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        {config.fields.map((field) => (
          <div
            key={field.name}
            className={
              field.type === "textarea" || field.type === "list" || field.type === "richtext" ? "sm:col-span-2" : ""
            }
          >
            <label className="block text-xs font-semibold text-navy/75 mb-1.5">
              {field.label}
              {field.required && <span className="text-teal ml-0.5">*</span>}
            </label>
            <FieldInput field={field} value={draft[field.name]} onChange={(v) => setField(field.name, v)} />
            {field.hint && <p className="text-xs text-navy/50 mt-1">{field.hint}</p>}
          </div>
        ))}
      </div>

      <div className="flex gap-3 pt-2 border-t border-navy/10">
        <button
          type="submit"
          disabled={saving}
          className="px-5 py-2.5 mt-4 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-midnight disabled:opacity-60 transition-colors"
        >
          {saving ? "Saving..." : "Save"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 mt-4 rounded-xl border border-navy/15 text-sm font-semibold text-navy/75 hover:bg-navy/5 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
