import React from "react";
import { Routes, Route } from "react-router-dom"; // No need for BrowserRouter here
import InstructionPage from "../components/Instruction";
import SearchPage from "../pages/SearchPages"
import { Switch } from "@mui/material";
import RecipeCards from "../components/Cards";
import { AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";
import RecipeSuggestion from "./Suggestion";
import Home from "./Home"
const Pages = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search/:searchQuery" element={<SearchPage/>}/>
        <Route path="/instruction/:recipeID" element={<InstructionPage />} />
        <Route path="/card" element={<RecipeCards />} />
      </Routes>
    </AnimatePresence>

  );
};

export default Pages;