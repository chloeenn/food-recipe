import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from 'react-router-dom';

const RecipeSuggestion = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=japanese`);
            const data = await response.json();
            console.log("Suggestion: ", data);
            setRecipes(data.recipes || []);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div>
            <Link to={`/instruction/${recipes.id}`}>
                <Cards recipes={recipes}/>
            </Link>
        </div>
    );
}

export default RecipeSuggestion;
