import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

// Builds a REST router for a mongoose model:
//   GET    /            public, sorted by `order` then createdAt
//   POST   /            admin only, create
//   PUT    /:id         admin only, update
//   DELETE /:id         admin only, delete
//   PUT    /reorder     admin only, bulk-update `order` from a list of ids
export function crudRouter(Model) {
  const router = Router();

  router.get("/", async (req, res) => {
    const items = await Model.find().sort({ order: 1, createdAt: 1 });
    res.json(items);
  });

  router.post("/", requireAuth, async (req, res) => {
    try {
      const item = await Model.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  router.put("/reorder", requireAuth, async (req, res) => {
    const { ids } = req.body || {};
    if (!Array.isArray(ids)) {
      return res.status(400).json({ error: "ids must be an array" });
    }
    await Promise.all(ids.map((id, index) => Model.updateOne({ _id: id }, { order: index })));
    res.json({ ok: true });
  });

  router.put("/:id", requireAuth, async (req, res) => {
    try {
      const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!item) return res.status(404).json({ error: "Not found" });
      res.json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  router.delete("/:id", requireAuth, async (req, res) => {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  });

  return router;
}
