// import React, {useState, useEffect} from "react";
// const RecipeInstruction = ({ recipeID }) => {
//     const [ingredients, setIngredients] = useState([]);

//     useEffect(() => {
//         const fetchIngredients = async () => {
//             try {
//                 const response = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/analyzeInstructions?apiKey=${process.env.REACT_APP_API_KEY}`);
//                 const data = await response.json();
//                 console.log("")
//                 setIngredients(data.ingredients || []);
//             } catch (error) {
//                 console.error('Error fetching ingredients:', error);
//             }
//         };

//         fetchIngredients();
//     }, [recipeID]);

//     return (
//         <div>
//             {/* <div className="recipe-title-img">
//                 <h3>{recipe.title}</h3>
//                 <img src={recipe.image} alt="Cannot display :(" />
//             </div> */}
//             <div className="ingredients">
//                 <h3>Ingredients:</h3>
//                 <ul>
//                     {ingredients.map((ingredient, index) => (
//                         <li key={index}>{ingredient.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>

//     )
// }

// export default RecipeInstruction;