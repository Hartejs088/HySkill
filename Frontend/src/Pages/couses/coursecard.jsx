import React from "react";
import "./Courses.css";

const CourseCard = ({ courseImage, title, instructor, rating, category, description }) => {
  return (
    <div className="course-card">
      <img src={courseImage} alt={title} className="course-image" />
      <div className="course-info">
        <h3 className="course-title">{title}</h3>
        <p className="course-instructor">By {instructor}</p>
        <p className="course-rating">⭐ {rating}</p>
        <p className="course-category">{category}</p>
        <p className="course-description">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
