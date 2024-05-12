import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter here
import RecipeSuggestion from './pages/Suggestion';
import SearchPages from './pages/SearchPages';
import Pages from "./pages/Pages";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar"
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <SearchBar />
        <Pages />
      </div>

    </Router>
  );
}

export default App;