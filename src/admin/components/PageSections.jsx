import { NavLink, useParams } from "react-router-dom";
import { ArrowRight, ListOrdered } from "lucide-react";
import { getPageConfig } from "../pagesConfig";
import { getCollectionConfig } from "../collectionsConfig";

const PageSections = () => {
  const { key } = useParams();
  const config = getPageConfig(key);

  if (!config) return <p>Unknown page.</p>;

  const Icon = config.icon;

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
          <Icon size={20} />
        </div>
        <div>
          <h1 className="font-display font-bold text-navy text-xl">{config.label}</h1>
          <p className="text-xs text-navy/45">{config.description}</p>
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mt-8 mb-3 flex items-center gap-1.5">
        <ListOrdered size={13} />
        Sections, In The Order They Appear On The Page
      </p>
      <div className="space-y-2.5">
        {config.sections.map((section) => (
          <NavLink
            key={section.key}
            to={`/admin/pages/${key}/${section.key}`}
            className="group flex items-center gap-4 bg-white rounded-2xl border border-navy/10 px-5 py-4 hover:border-teal/50 hover:shadow-sm transition-all"
          >
            <span className="text-sm font-semibold text-navy flex-1 min-w-0 truncate">{section.label}</span>
            <span className="text-xs text-navy/40 shrink-0">
              {section.fields.length} {section.fields.length === 1 ? "field" : "fields"}
            </span>
            <ArrowRight
              size={16}
              className="text-navy/20 group-hover:text-teal group-hover:translate-x-0.5 transition-all shrink-0"
            />
          </NavLink>
        ))}
      </div>

      {config.relatedCollections.length > 0 && (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-3">
            Also Shown On This Page
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {config.relatedCollections.map((collectionKey) => {
              const collectionConfig = getCollectionConfig(collectionKey);
              if (!collectionConfig) return null;
              const CIcon = collectionConfig.icon;
              return (
                <NavLink
                  key={collectionKey}
                  to={`/admin/content/${collectionKey}`}
                  className="group bg-white rounded-xl border border-navy/10 px-4 py-3 flex items-center gap-3 hover:border-teal/50 hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-sand/40 text-navy flex items-center justify-center shrink-0">
                    <CIcon size={16} />
                  </div>
                  <span className="text-sm font-semibold text-navy flex-1 min-w-0 truncate">
                    Manage {collectionConfig.label}
                  </span>
                  <ArrowRight
                    size={15}
                    className="text-navy/20 group-hover:text-teal group-hover:translate-x-0.5 transition-all shrink-0"
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSections;
