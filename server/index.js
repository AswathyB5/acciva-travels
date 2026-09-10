import "dotenv/config";
import fs from "node:fs";
import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import { crudRouter } from "./routes/crudFactory.js";
import {
  Service,
  Destination,
  Testimonial,
  Stat,
  BlogPost,
  JobOpening,
  TimelineItem,
} from "./models/content.js";
import authRouter from "./routes/auth.js";
import pageContentRouter from "./routes/pageContent.js";
import { contactSubmissionRouter, partnerApplicationRouter } from "./routes/submissions.js";
import uploadRouter, { uploadsDir } from "./routes/upload.js";

fs.mkdirSync(uploadsDir, { recursive: true });

const app = express();

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());
app.use("/uploads", express.static(uploadsDir));

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/upload", uploadRouter);
app.use("/api/auth", authRouter);
app.use("/api/page-content", pageContentRouter);
app.use("/api/services", crudRouter(Service));
app.use("/api/destinations", crudRouter(Destination));
app.use("/api/testimonials", crudRouter(Testimonial));
app.use("/api/stats", crudRouter(Stat));
app.use("/api/blog-posts", crudRouter(BlogPost));
app.use("/api/job-openings", crudRouter(JobOpening));
app.use("/api/timeline", crudRouter(TimelineItem));
app.use("/api/submissions/contact", contactSubmissionRouter);
app.use("/api/submissions/partner", partnerApplicationRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`API server listening on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  });
