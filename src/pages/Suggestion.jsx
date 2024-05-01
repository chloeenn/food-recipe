import React, { useState } from "react";
import Cards from "../components/Cards";
import { Grid } from "@mui/material";
import {Link, useNavigate } from 'react-router-dom';
const RecipeSuggestion = () => {
    const [recipe, setRecipe] = useState([]);

    const getRecipes = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
            const data = await response.json();
            // console.log(data)
            console.log("EHEHHEHEHEHEHEHHEH")
            setRecipe(data.recipe || []);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
        getRecipes();
    };

    return (
        <Grid container spacing={2}>
            {recipe.map((recipe, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3} >
                    <Link to={`/instruction/${recipe.id}`}>
                        <Cards recipe={recipe} index={index} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}

export default RecipeSuggestion;
