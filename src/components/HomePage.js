import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [bakeryVisible, setBakeryVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBakeryVisible(window.scrollY > window.innerHeight / 1.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="homepage">
      {/* Wooden Section */}
      <div className="section wooden">
        <h1 className="section-title">Welcome to Wooden Bakery.</h1>
        <p className="description">Wooden Bakery is a student-built website which uses the Spoonacular API to search through a vast database of recipes from cuisines all across the globe for you to enjoy!</p>
      </div>

      {/* Bakery Section */}
      <div className="section bakery">
        <h1 className={`section-title ${bakeryVisible ? "slide-in" : ""}`}>Catalogue</h1>
        <p className="description">Indulge in over 20,000+ recipes brought from the world to your home. At the click of a button.</p>

        {/* Search Button inside Bakery Section */}
        <button className="search-button" onClick={() => navigate("/recipes")}>
          Search Recipes
        </button>
      </div>
    </div>
  );
};

export default HomePage;
