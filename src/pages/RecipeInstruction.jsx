import React from "react";
import Instruction from "../components/Instruction"
const RecipeInstruction = ({recipe}) => {
    const {title, instructions, ingredients} = recipe;
    return(
        <div className="recipe-details">
            <div className="title-block">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <FaveHeart recipe={recipe} />
            </div>
            <div className="content-block">
                <Instruction ingredients={ingredients} instructions={instructions}/>
            </div>
        </div>
    )
}