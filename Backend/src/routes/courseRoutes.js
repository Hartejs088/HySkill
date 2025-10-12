import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// POST /courses/add
router.post("/", async (req, res) => {
  try {
    const { title, instructorName, category, image, description, rating } = req.body;

    if (!title || !instructorName || !category || !image || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCourse = new Course({ title, instructorName, category, image, description, rating });
    await newCourse.save();

    res.status(201).json({ message: "Course added successfully", data: newCourse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /courses/all (optional)
router.get("/all", async (req, res) => {
  try {
    const forYou = await Course.find().sort({ createdAt: -1 }).limit(5);
    const webDev = await Course.find({ category: "Web Development" });
    const ml = await Course.find({ category: "Machine Learning" });
    const others = await Course.find({ category: "Others" });

    res.json({ forYou, webDev, ml, others });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
