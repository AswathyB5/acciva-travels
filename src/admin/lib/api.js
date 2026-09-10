const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const TOKEN_KEY = "acciva_admin_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

async function request(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // no JSON body
  }

  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`);
  }
  return data;
}

async function uploadImage(file) {
  const token = getToken();
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${API_URL}/upload`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: formData,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // no JSON body
  }

  if (!res.ok) {
    throw new Error(data?.error || `Upload failed (${res.status})`);
  }
  return data;
}

export const api = {
  login: (username, password) => request("/auth/login", { method: "POST", body: { username, password } }),
  me: () => request("/auth/me", { auth: true }),
  uploadImage,

  list: (collection) => request(`/${collection}`),
  create: (collection, payload) => request(`/${collection}`, { method: "POST", body: payload, auth: true }),
  update: (collection, id, payload) =>
    request(`/${collection}/${id}`, { method: "PUT", body: payload, auth: true }),
  remove: (collection, id) => request(`/${collection}/${id}`, { method: "DELETE", auth: true }),
  reorder: (collection, ids) =>
    request(`/${collection}/reorder`, { method: "PUT", body: { ids }, auth: true }),

  getPageContent: (page) => request(`/page-content/${page}`),
  savePageContent: (page, data) =>
    request(`/page-content/${page}`, { method: "PUT", body: data, auth: true }),

  listSubmissions: (kind) => request(`/submissions/${kind}`, { auth: true }),
  markSubmissionRead: (kind, id, read) =>
    request(`/submissions/${kind}/${id}`, { method: "PATCH", body: { read }, auth: true }),
  deleteSubmission: (kind, id) => request(`/submissions/${kind}/${id}`, { method: "DELETE", auth: true }),
  submitContact: (payload) => request("/submissions/contact", { method: "POST", body: payload }),
  submitPartner: (payload) => request("/submissions/partner", { method: "POST", body: payload }),
};

export { API_URL };
