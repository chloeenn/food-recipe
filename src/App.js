import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter here
import RecipeSuggestion from './pages/RecipeSuggestion';
import SearchPages from './pages/SearchPages';
import Pages from "./pages/Pages";

const App = () => {
  return (
    <Router> {/* Use BrowserRouter here */}
      <RecipeSuggestion />
      <SearchPages />
      <Pages />
    </Router>
  );
}

export default App;