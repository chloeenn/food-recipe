import React from "react"
import "./Cards.scss"
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import "./Instruction"
import "../index.css"
import dishImage from "../assets/photo/egg1.jpg";
const RecipeCards = ({ recipes, index }) => {
  console.log(`card: ${recipes}`)
  return (
    <Grid container spacing={2}>
      {recipes.map((recipe, index) => (
        <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
          <Link to={`/instruction/${recipe.id}`} style={{ textDecoration: 'none !important'}}>
            <div className='recipe-card'>
              <div className='recipe-img'>
                <img src={recipe.image || dishImage} alt="Cannot display :(" />
              </div>
              <div className='recipe-content'>
                <h2 >{recipe.title ? recipe.title: "Tamagoyaki"}</h2>
              </div>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};



export default RecipeCards;