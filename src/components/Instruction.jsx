import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Instruction.scss"
import dishImage from "../assets/photo/omelet.jpg";
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
                <div className="ins-img">
                <img src={dishInfo.image || dishImage} alt={dishInfo.title || "Default dish"}/>
                </div>
                <div className="ins-info">
                    <h2>{dishInfo.title ? dishInfo.title : "Japanese-Style Rolled Omelet"}</h2>
                    <p>Servings: {dishInfo.servings}</p>
                    <p>Total Time: {dishInfo.readyInMinutes}</p>
                    <p>Health Score: {dishInfo.healthScore}</p>
                </div>
            </div>

            <hr />
            <div className="ins-detail">
                <div className="ins-heading"><h2>Ingredients:</h2></div>
                <ul>
                    {dishInfo.extendedIngredients && dishInfo.extendedIngredients.map((ingredient, index) => (
                        <li className="ins-ingredient" key={index}>
                            {ingredient.amount}  {ingredient.unit} {ingredient.name}
                        </li>
                    ))}
                </ul>

                <div className="ins-heading"><h2>Directions:</h2></div>
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
