import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Instruction.scss"
const Instruction = () => {
    const { recipeID } = useParams();
    // const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [dishInfo, setDishInfo] = useState("");
    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                // Fetch ingredients
                const responseIngredients = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                const dataInfo = await responseIngredients.json();
                setDishInfo(dataInfo)
                console.log("Recipe ID:", dishInfo);
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
        <div className="ins">
            <div className="ins-overview">
                <img className="ins-img" src={dishInfo.image} alt="Dish" />
                <div className="ins-info">
                    <h1 >{dishInfo.title ? dishInfo.title: "Japanese-Style Rolled Omelet"}</h1>
                    <p>Servings: {dishInfo.servings}</p>
                    <p>Total Time: {dishInfo.readyInMinutes}</p>
                    <p>Health Score: {dishInfo.healhScore}</p>
                </div>
            </div>

            <hr/>
            <div className="ins-detail">
                <h2>Ingredients:</h2>
                <ul>
                    {dishInfo.extendedIngredients && dishInfo.extendedIngredients.map((ingredient, index) => (
                        <li className="ins-ingredient" key={index}>
                            {ingredient.amount}  {ingredient.unit} {ingredient.name} - 
                        </li>
                    ))}
                </ul>

                <h2>Instructions:</h2>
                <ol>
                    {instructions.map((instruction, index) => (
                        <li className="ins-instruction" key={index}>{instruction.step}</li>
                    ))}
                </ol>
            </div>
        </div>

    );
};

export default Instruction;
