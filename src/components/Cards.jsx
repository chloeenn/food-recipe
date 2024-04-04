import React from "react"
import "./Cards.scss"
const Cards = ({ recipe, index }) => {
    return (
        //<div className='recipe-card' key={index} style={{ padding: '10px', margin: '20px', backgroundColor: '#EEEEEE', borderRadius: '10px' }}>
        <div className='recipe-card'>
            <div className='recipe-img'>
                <img src={recipe.image} alt="Cannot display :(" />
            </div>
            <div className='recipe-content'>
                <h2>{recipe.title}</h2>
            </div>
        </div>
    )
}

export default Cards;