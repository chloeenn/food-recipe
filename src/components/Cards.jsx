import React from "react"
import "./Cards.scss"
import { Grid } from "@mui/material";
import RecipeInstruction from "../pages/RecipeInstruction"
const Cards = ({ recipe, index }) => {
    const handleClick = () => {
        RecipeInstruction(recipe);
    }
    return (
        <div className='recipe-card'  onClick={handleClick}>
            <div className='recipe-img'>
                <img src={recipe.image} alt="Cannot display :(" />
            </div>
            <div className='recipe-content'>
                <h2>{recipe.title}</h2>
            </div>
        </div>
    )
}
const RecipeCards = ({ recipes, index }) => {
    return (
        <Grid container spacing={2}>
            {recipes.map((recipe, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Cards recipe={recipe} index={index} />
                </Grid>
            ))}
        </Grid>
    );
};
export default RecipeCards