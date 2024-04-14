import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Instruction = () => {
    const { recipeID } = useParams();
    const [ingredients, setIngredients] = useState([]);
    const [Instruction, setInstruction] = useState([])
    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const responseIngredients = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                const dataIngredients = await responseIngredients.json();
                setIngredients(dataIngredients.extendedIngredients || []);

                // const responseInstruction = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/analyzeInstructions?apiKey=${process.env.REACT_APP_API_KEY}`)
                // const dataInstruction = await responseInstruction.json();
                // setInstruction(dataInstruction)
            } catch (error) {
                console.error('Error fetching ingredients:', error);
            }
        };

        fetchIngredients();
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
        </div>
    );
};

export default Instruction;
