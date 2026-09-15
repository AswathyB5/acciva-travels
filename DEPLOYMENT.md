# Deployment Guide — Acciva Travels

This project has two separate parts that deploy independently:

1. **Frontend** (this folder, `src/`) — a Vite + React single-page site. Static
   files only once built; can be hosted anywhere that serves static files
   (GoDaddy, Netlify, Vercel, etc.).
2. **Backend/API** (`server/`) — Node/Express + MongoDB, powers the admin
   panel (blogs, images, page content) and the two contact forms. Needs a
   Node host (currently configured for Render via `render.yaml`).

This guide's frontend steps assume **Hostinger** shared hosting (hPanel +
File Manager), but the same steps work for any similar cPanel/LiteSpeed-style
static host.

Both must be deployed for the site to be fully correct. If only the frontend
is deployed and the backend URL below is wrong/unreachable, every page still
loads but shows placeholder/fallback content instead of what was edited in
the admin panel, and the Careers vehicle-partner form breaks.

---

## 1. Frontend — build & deploy (Hostinger shared hosting)

### Step 1 — Set environment variables before building

Environment variables for this project are **baked into the code at build
time** (this is a Vite app), not read at runtime. So they must be set/edited
*before* running the build, in a file named `.env` in the project root
(copy `.env.example` to `.env` if it doesn't exist yet — `.env` itself is
never committed to git, for security).

```
VITE_WEB3FORMS_ACCESS_KEY=f926bd99-b2f1-4c05-bd5d-981b9ca4b85b
VITE_API_URL=https://<your-live-backend-url>/api
```

- `VITE_WEB3FORMS_ACCESS_KEY` — powers the Contact page and Careers
  vehicle-partner form (sends form submissions by email via
  [web3forms.com](https://web3forms.com)). The value above is the project's
  existing key.
- `VITE_API_URL` — must point at the **live** backend API (see part 2 below),
  not `localhost`. This is what makes admin-panel-edited content (blogs,
  images, page text) show up on the live site.

### Step 2 — Build

```
npm install
npm run build
```

This produces a `dist/` folder containing the finished, static website.

### Step 3 — Upload

In Hostinger's **hPanel → File Manager** (or via FTP), upload the
**contents of `dist/`** (not the `dist` folder itself, and not the rest of
the project) into `public_html` — or a subfolder of it, if the site isn't
meant to be at the domain root.

### Step 4 — SPA routing

This site has one real HTML page; all other routes (`/about`, `/blog/...`,
etc.) are handled client-side by React Router. Without extra config, loading
or refreshing any URL other than `/` returns a 404 from the server.

An `.htaccess` file that fixes this is already included at
`public/.htaccess` in this repo — it gets copied into `dist/` automatically
by the build, so it uploads along with everything else in step 3. Hostinger's
servers read `.htaccess` the same way Apache does, so no extra action is
needed there.

---

## 2. Backend/API — deploy (`server/`)

Already configured for [Render](https://render.com) via `render.yaml` at
the project root — connect the repo in Render and it will provision itself
from that file. Required environment variables (set in Render's dashboard,
not in a committed file — see `server/.env.example` for descriptions of
each):

```
MONGODB_URI=            # MongoDB Atlas connection string
JWT_SECRET=              # long random string, used to sign admin login tokens
CORS_ORIGIN=             # the live frontend URL(s), comma-separated
SEED_ADMIN_USERNAME=     # first admin login, only used once by `npm run seed`
SEED_ADMIN_PASSWORD=     # change immediately after first login
CLOUDINARY_CLOUD_NAME=   # required in production — see note below
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

**Cloudinary is required for production.** Without it, images uploaded
through the admin panel are saved to local disk on the server, which does
not survive a redeploy or restart on Render (or most hosts) — uploaded
images would silently disappear. Free tier at
[cloudinary.com](https://cloudinary.com); the three values above are on the
Cloudinary dashboard home page after signup.

Once the backend is live, take note of its URL — that's the value that goes
into the frontend's `VITE_API_URL` (part 1, step 1) as `<url>/api`.

---

## Quick checklist

- [ ] Backend deployed (Render or elsewhere), Cloudinary env vars set
- [ ] Backend `CORS_ORIGIN` set to the live frontend domain
- [ ] Frontend `.env` has `VITE_API_URL` pointing at the live backend, not localhost
- [ ] Frontend `.env` has `VITE_WEB3FORMS_ACCESS_KEY` set
- [ ] `npm run build` run *after* the above `.env` changes
- [ ] Contents of `dist/` (including `.htaccess`) uploaded to hosting
- [ ] Test: visit the live site, refresh on a non-home page (e.g. `/about`) — should not 404
- [ ] Test: submit the Contact form and the Careers form, confirm emails arrive
- [ ] Test: edit something in the admin panel, confirm it shows on the live site
