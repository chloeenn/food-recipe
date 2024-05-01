import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter here
import RecipeSuggestion from './pages/Suggestion';
import SearchPages from './pages/SearchPages';
import Pages from "./pages/Pages";

const App = () => {
  return (
    <Router> 
      <RecipeSuggestion />
      <SearchPages />
      <Pages />
    </Router>
  );
}

export default App;