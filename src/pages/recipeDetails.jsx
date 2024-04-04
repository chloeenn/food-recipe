import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { Grid } from "@mui/material";
const RecipeDetails = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
            const data = await response.json();
            console.log(data)
            setRecipes(data.recipes || []);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div>
            <Grid container spacing={2} >
            {recipes.map((recipe, index) => (
                <Cards recipe={recipe} index={index}/>
            ))}
            </Grid>
            
        </div>

        
    );
}

export default RecipeDetails;
