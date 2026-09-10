import { Router } from "express";
import { PageContent } from "../models/content.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/:page", async (req, res) => {
  const doc = await PageContent.findOne({ page: req.params.page });
  res.json(doc?.data || {});
});

router.put("/:page", requireAuth, async (req, res) => {
  const doc = await PageContent.findOneAndUpdate(
    { page: req.params.page },
    { data: req.body || {} },
    { new: true, upsert: true }
  );
  res.json(doc.data);
});

export default router;
