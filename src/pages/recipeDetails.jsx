import React, { useState } from "react";
import RecipeCards from "../components/Cards";
const RecipeDetails = () => {
    const [recipes, setRecipes] = useState([]);
    
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
            <RecipeCards recipes={recipes} />
        </div>
    );
}

export default RecipeDetails;
