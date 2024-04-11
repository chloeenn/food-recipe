import React from "react";
import Instruction from "../components/Instruction"
const RecipeInstruction = async({ recipe }) => {
    const data = await (`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`).json();
    console.log("Instruction: "+data)
    return (
        <div className="recipe-details">
            <div className="title-block">
                <div className="title">
                    <h1>{recipe.title}</h1>
                </div>
            </div>
            <div className="content-block">
                <Instruction ingredients={ingredients} instructions={instructions} />
            </div>
        </div>
    )
}

export default RecipeInstruction;