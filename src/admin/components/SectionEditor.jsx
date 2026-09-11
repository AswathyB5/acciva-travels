import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import { api } from "../lib/api";
import { getPageConfig, getSectionConfig, pageDefaults } from "../pagesConfig";
import FieldInput from "./FieldInput";

const SectionEditor = () => {
  const { key, section } = useParams();
  const pageConfig = getPageConfig(key);
  const sectionConfig = getSectionConfig(key, section);
  const [fullData, setFullData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!pageConfig) return;
    Promise.resolve().then(() => {
      setLoading(true);
      setSaved(false);
      api
        .getPageContent(key)
        .then((remote) => setFullData({ ...pageDefaults(key), ...remote }))
        .catch((err) => {
          setError(err.message);
          setFullData(pageDefaults(key));
        })
        .finally(() => setLoading(false));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, section]);

  if (!pageConfig || !sectionConfig) return <p>Unknown section.</p>;

  const setField = (name, value) => {
    setFullData((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await api.savePageContent(key, fullData);
      setSaved(true);
    } catch (err) {
      setError(err.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <NavLink
        to={`/admin/pages/${key}`}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy/68 hover:text-teal mb-4"
      >
        <ChevronLeft size={14} />
        {pageConfig.label}
      </NavLink>

      <h1 className="font-display font-bold text-navy text-xl">{sectionConfig.label}</h1>
      <p className="text-xs text-navy/62 mt-1">All text and images shown in this section of the page.</p>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5 mt-4">
          {error}
        </p>
      )}

      {loading ? (
        <div className="mt-6 space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 rounded-xl bg-navy/5 animate-pulse" />
          ))}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-white rounded-2xl border border-navy/10 shadow-sm p-6 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {sectionConfig.fields.map((field) => (
              <div
                key={field.name}
                className={`rounded-xl border border-navy/10 bg-ivory/40 p-4 transition-colors hover:border-teal/30 ${
                  field.type === "textarea" ||
                  field.type === "list" ||
                  field.type === "cards" ||
                  field.type === "richtext" ||
                  field.type === "collection-picker"
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <label className="block text-xs font-semibold text-navy/75 mb-2">{field.label}</label>
                <FieldInput field={field} value={fullData[field.name]} onChange={(v) => setField(field.name, v)} />
                {field.hint && <p className="text-xs text-navy/50 mt-1.5">{field.hint}</p>}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-navy/10">
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-midnight disabled:opacity-60 transition-colors"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            {saved && (
              <span className="inline-flex items-center gap-1.5 text-sm text-teal font-medium">
                <CheckCircle2 size={16} />
                Saved &mdash; live on the site now
              </span>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default SectionEditor;
