import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Inbox, Trash2, Mail, MailOpen } from "lucide-react";
import { api } from "../lib/api";

const LABELS = {
  contact: {
    title: "Contact Enquiries",
    fields: [
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "subject", label: "Subject" },
      { key: "message", label: "Message" },
    ],
  },
  partner: {
    title: "Driver / Partner Applications",
    fields: [
      { key: "name", label: "Name" },
      { key: "phone", label: "Phone" },
      { key: "vehicleType", label: "Vehicle Type" },
      { key: "regYear", label: "Registration Year" },
    ],
  },
};

const Submissions = () => {
  const { kind } = useParams();
  const meta = LABELS[kind];
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    api
      .listSubmissions(kind)
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    Promise.resolve().then(load);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind]);

  if (!meta) return <p>Unknown submission type.</p>;

  const toggleRead = async (item) => {
    await api.markSubmissionRead(kind, item._id, !item.read);
    load();
  };

  const remove = async (id) => {
    if (!confirm("Delete this submission?")) return;
    await api.deleteSubmission(kind, id);
    load();
  };

  const unreadCount = items.filter((i) => !i.read).length;

  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="font-display font-bold text-navy text-xl">{meta.title}</h1>
        {unreadCount > 0 && (
          <span className="text-xs font-bold bg-teal text-white px-2.5 py-1 rounded-full">
            {unreadCount} new
          </span>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5 mt-4">
          {error}
        </p>
      )}

      {loading ? (
        <div className="mt-6 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 rounded-2xl bg-navy/5 animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="mt-6 bg-white rounded-2xl border border-dashed border-navy/15 py-14 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-3">
            <Inbox size={20} className="text-navy/30" />
          </div>
          <p className="text-navy/60 text-sm font-medium">No submissions yet.</p>
          <p className="text-navy/40 text-xs mt-1">They'll show up here as soon as someone submits the form.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <div
              key={item._id}
              className={`bg-white rounded-2xl border px-5 py-4 ${
                item.read ? "border-navy/10" : "border-teal/40 shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {!item.read && <span className="w-2 h-2 rounded-full bg-teal shrink-0" />}
                    <p className="text-xs text-navy/40">{new Date(item.createdAt).toLocaleString()}</p>
                  </div>
                  <dl className="text-sm space-y-1.5">
                    {meta.fields.map((f) => (
                      <div key={f.key} className="flex gap-2">
                        <dt className="font-semibold text-navy shrink-0">{f.label}:</dt>
                        <dd className="text-navy/70 break-words">{item[f.key] || "—"}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  <button
                    onClick={() => toggleRead(item)}
                    title={item.read ? "Mark unread" : "Mark read"}
                    className="w-9 h-9 rounded-lg border border-navy/10 text-navy/60 hover:bg-teal/10 hover:text-teal hover:border-teal/30 flex items-center justify-center"
                  >
                    {item.read ? <Mail size={15} /> : <MailOpen size={15} />}
                  </button>
                  <button
                    onClick={() => remove(item._id)}
                    title="Delete"
                    className="w-9 h-9 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 flex items-center justify-center"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Submissions;
