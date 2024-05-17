import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; 
import Pages from "./pages/Pages";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar"
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