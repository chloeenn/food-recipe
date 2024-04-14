import React from "react"
import "./Cards.scss"
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./Instruction"
// import Cards from "./Cards"
const Cards = ({ recipe, index }) => {
    return (
        <div className='recipe-card'>
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
                    {/* {console.log(`Recipe: ${recipe.title} ID: ${recipe.id}`)} */}
                    <Link to={`/recipes/${recipe.id}`}>
                        <h3>ETTETET</h3>
                        <Cards recipe={recipe} index={index} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};
export default RecipeCards;