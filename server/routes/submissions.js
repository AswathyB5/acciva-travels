import { Router } from "express";
import { ContactSubmission, PartnerApplication } from "../models/Submission.js";
import { requireAuth } from "../middleware/auth.js";

function submissionRouter(Model) {
  const router = Router();

  // Public: the site's own forms post here.
  router.post("/", async (req, res) => {
    try {
      const item = await Model.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // Admin only: reading and managing submissions.
  router.get("/", requireAuth, async (req, res) => {
    const items = await Model.find().sort({ createdAt: -1 });
    res.json(items);
  });

  router.patch("/:id", requireAuth, async (req, res) => {
    const item = await Model.findByIdAndUpdate(
      req.params.id,
      { read: !!req.body?.read },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  });

  router.delete("/:id", requireAuth, async (req, res) => {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  });

  return router;
}

export const contactSubmissionRouter = submissionRouter(ContactSubmission);
export const partnerApplicationRouter = submissionRouter(PartnerApplication);
