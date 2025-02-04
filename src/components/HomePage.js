import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="overlay">
        <h1 className="homepage-title">Welcome to Wooden Bakery</h1>
        <p className="homepage-description">
          Discover thousands of delicious recipes at your fingertips. Search, explore, and cook amazing meals with ease!
        </p>
        <button className="homepage-button" onClick={() => navigate("/recipes")}>
          Explore Recipes
        </button>
      </div>
    </div>
  );
};

export default HomePage;
