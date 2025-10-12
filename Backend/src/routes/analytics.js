// routes/analytics.js
import express from "express";
import User from "../models/User.model.js";
import Chat from "../models/chat.model.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalChats = await Chat.countDocuments();
    const skillAggregation = await User.aggregate([
      { $unwind: "$skills" },
      { $group: { _id: "$skills", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);

    res.json({ totalUsers, totalChats, totalCalls, topSkills: skillAggregation });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
