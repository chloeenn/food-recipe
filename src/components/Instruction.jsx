import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
const Instruction = () => {
    const { recipeID } = useParams(); // Get the recipe ID from URL params
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setIngredients(data.extendedIngredients || []);
            } catch (error) {
                console.error('Error fetching ingredients:', error);
            }
        };

        fetchIngredients();
    }, [recipeID]);
    if(!ingredients){
        return <div><h3>Loading...</h3></div>
    }
    return (
        <div>
            <div className="ingredients">
                <h3></h3>
                <h3>Ingredients:</h3>
                <h3>EHEEHEHEHHEHHEEHHEHEHEHEHEHEHE</h3>
            </div>
        </div>

    )
}

export default Instruction;