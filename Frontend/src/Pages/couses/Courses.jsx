import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./Courses.css";

const Courses = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState({
    title: "",
    instructorName: "",
    category: "Web Development",
    image: "",
    description: "",
    rating: 5,
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("/courses/add", courseData); // your backend endpoint
      toast.success("Course added successfully!");
      // Reset form
      setCourseData({
        title: "",
        instructorName: "",
        category: "Web Development",
        image: "",
        description: "",
        rating: 5,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="courses-page">
      <div className="courses-container">
        <main className="courses-content">
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#028477", marginBottom: "2rem" }}>
            Add New Course
          </h1>

          {loading ? (
            <div className="loading-container">
              <Spinner animation="border" variant="success" />
            </div>
          ) : (
            <Form className="course-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Course Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={courseData.title}
                  onChange={handleChange}
                  placeholder="Enter course title"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Instructor Name</Form.Label>
                <Form.Control
                  type="text"
                  name="instructorName"
                  value={courseData.instructorName}
                  onChange={handleChange}
                  placeholder="Enter instructor name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select name="category" value={courseData.category} onChange={handleChange}>
                  <option>Web Development</option>
                  <option>Machine Learning</option>
                  <option>Others</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={courseData.image}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="description"
                  value={courseData.description}
                  onChange={handleChange}
                  placeholder="Enter course description"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="number"
                  name="rating"
                  value={courseData.rating}
                  onChange={handleChange}
                  min={1}
                  max={5}
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Add Course
              </Button>
            </Form>
          )}
        </main>
      </div>
    </div>
  );
};

export default Courses;
