import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Instruction = () => {
    const { recipeID } = useParams();
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                // Fetch ingredients
                const responseIngredients = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                const dataIngredients = await responseIngredients.json();
                setIngredients(dataIngredients.extendedIngredients || []);

                // Fetch instructions
                const responseInstructions = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`);
                const dataInstructions = await responseInstructions.json();
                if (dataInstructions.length > 0) {
                    setInstructions(dataInstructions[0].steps || []);
                }
            } catch (error) {
                console.error('Error fetching recipe data:', error);
            }
        };

        fetchRecipeData();
    }, [recipeID]);

    return (
        <div>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name} - {ingredient.amount} {ingredient.unit}
                    </li>
                ))}
            </ul>

            <h3>Instructions:</h3>
            <ol>
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction.step}</li>
                ))}
            </ol>
        </div>
    );
};

export default Instruction;
