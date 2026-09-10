import { Router } from "express";
import multer from "multer";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { v2 as cloudinary } from "cloudinary";
import { requireAuth } from "../middleware/auth.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const uploadsDir = path.join(__dirname, "..", "uploads");

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"]);

const cloudinaryConfigured =
  process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET;

if (cloudinaryConfigured) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
} else {
  console.warn(
    "[upload] CLOUDINARY_* env vars not set — falling back to local disk storage.\n" +
      "  Local storage does NOT survive on most hosts (Vercel, Render, Railway free tiers all use\n" +
      "  ephemeral/read-only filesystems), so uploaded images will disappear after a redeploy or restart.\n" +
      "  Set CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET in server/.env before deploying."
  );
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Always buffer in memory: cheap for images under the 8MB cap below, and lets
// us send the same buffer to either Cloudinary or local disk without a temp file.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!ALLOWED_TYPES.has(file.mimetype)) {
      return cb(new Error("Only image files (jpg, png, webp, gif, svg) are allowed"));
    }
    cb(null, true);
  },
});

function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "acciva-travels", resource_type: "image" },
      (err, result) => (err ? reject(err) : resolve(result.secure_url))
    );
    stream.end(buffer);
  });
}

function saveToLocalDisk(req, file) {
  const ext = path.extname(file.originalname).toLowerCase();
  const filename = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${ext}`;
  fs.writeFileSync(path.join(uploadsDir, filename), file.buffer);
  return `${req.protocol}://${req.get("host")}/uploads/${filename}`;
}

const router = Router();

router.post("/", requireAuth, (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    try {
      const url = cloudinaryConfigured
        ? await uploadToCloudinary(req.file.buffer)
        : saveToLocalDisk(req, req.file);
      res.status(201).json({ url });
    } catch (uploadErr) {
      console.error(uploadErr);
      res.status(500).json({ error: "Upload failed" });
    }
  });
});

export default router;
