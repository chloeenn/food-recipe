import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import InstructionPage from "../components/Instruction";
import SearchPage from "../pages/SearchPages";
import RecipeCards from "../components/Cards";
import Home from "./Home";

const Pages = () => {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/search/:searchQuery"
          element={
            <motion.div {...pageTransition}>
              <SearchPage />
            </motion.div>
          }
        />
        <Route
          path="/instruction/:recipeID"
          element={
            <motion.div {...pageTransition}>
              <InstructionPage />
            </motion.div>
          }
        />
        <Route
          path="/card"
          element={
            <motion.div {...pageTransition}>
              <RecipeCards />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
