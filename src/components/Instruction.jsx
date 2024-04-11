import React from "react";

const Instruction = ({ingredients, steps}) => {
    return(
        <div>
            <ul>
                {ingredients.map(ingredients => {
                    <li>{ingredients.text}</li>
                })}
            </ul>
            <ul>
                {steps.map(steps => {
                    <li>{steps.step}</li>
                })}
            </ul>
        </div>
    )

}

export default Instruction;