import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Search.css";

const Search = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`modern-search ${isActive ? "active" : ""}`}>
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search for tutors, skills, or courses..."
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </div>
  );
};

export default Search;
