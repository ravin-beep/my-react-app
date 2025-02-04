import './App.css';
import RecipeFinder from "./components/RecipeFinder"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipeFinder />} />
      </Routes>
    </Router>
  );
};

export default App;
