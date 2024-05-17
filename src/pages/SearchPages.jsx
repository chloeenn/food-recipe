import React, { useState, useEffect } from 'react';
import RecipeCards from '../components/Cards';
import "../components/Cards.scss"
import { Link, useParams } from 'react-router-dom';
import "./SearchPages.scss"
const SearchPages = () => {
    const { searchQuery } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        getSearch();
    }, [searchQuery]);

    const getSearch = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&number=10`);
            const data = await response.json();
            console.log(data);
            setSearchResults(data.results || []);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div className='search-page'>
            <h3>Search Results For: {searchQuery}</h3>
            <Link to={`/instruction/${searchResults}`}>
                <RecipeCards recipes={searchResults} />
            </Link>
        </div>

    );
}

export default SearchPages;