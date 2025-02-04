import React, { useState, useEffect } from "react";
import "./RecipeFinder.css";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { Card, CardContent } from "./UI/Card.js";
import { Search } from "lucide-react";

const RecipeFinder = () => {
  const API_KEY = "e17525a6aeec4d428f942945a03a8a3e"; 

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch recipes based on the search query
  const getRecipes = async (searchQuery) => {
    if (!searchQuery) return; // Do not make a request if the search query is empty

    setLoading(true);
    setError(null);  // Reset any previous error

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${API_KEY}&number=10`
      );
      const data = await response.json();

      // Check if data contains any recipes
      if (data.results) {
        setRecipes(data.results);  // Extract recipe data
      } else {
        setRecipes([]);  // No recipes found
      }
    } catch (error) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch recipes when the search query changes
  useEffect(() => {
    getRecipes(query);
  }, [query]);

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">....Wooden Bakery....</h1>
        <h2 className="title2">Finger licking food at your fingertips!</h2>
      </div>
      {/* Search Box */}
      <div className="search-container">
        <Input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <Button className="search-button" onClick={() => getRecipes(query)}>
          <Search className="search-icon" /> Search
        </Button>
      </div>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading Spinner */}
      {loading && <div className="loading-message">Loading...</div>}

      {/* Display Recipes */}
      <div className="recipe-grid">
        {recipes.length === 0 && !loading && !error && (
          <div className="no-recipes-message">No recipes found. Please try another search.</div>
        )}

        {recipes.map((recipe, index) => (
          <Card key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <CardContent>
              <h2 className="recipe-title">{recipe.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipeFinder;