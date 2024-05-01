import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter here
import RecipeSuggestion from './pages/Suggestion';
import SearchPages from './pages/SearchPages';
import Pages from "./pages/Pages";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router> 
      <NavBar/>
      {/* <Home/> */}
      {/* <SearchPages /> */}
      <Pages />
    </Router>
  );
}

export default App;