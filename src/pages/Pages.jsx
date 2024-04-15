import React from "react";
import { Routes, Route } from "react-router-dom"; // No need for BrowserRouter here
import Instruction from "../components/Instruction";

const Pages = () => {
  return (
    <Routes>
      <Route path="/instruction/:recipeID" element={<Instruction />} />
    </Routes>
  );
};

export default Pages;