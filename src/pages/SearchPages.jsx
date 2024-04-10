import React, { useState, useEffect } from 'react';
import RecipeCards from '../components/Cards';
import RecipeDetails from './recipeDetails';
import "./SearchPages.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchPages = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getSearch();
    }, [searchQuery]);

    const getSearch = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`);
            const data = await response.json();
            console.log(data);
            setSearchResults(data.results || []);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value); // Update searchQuery state with the input value
    };

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
        getSearch(searchQuery);
        setSearchQuery("")
    };

    return (
        <div>
            <div className='search-bar'>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={updateSearchQuery}
                        placeholder="Search..." />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>

            </div>
            <div claessName='search-result'>
                <h3>Search Result for {searchQuery}</h3>
                <RecipeCards recipes={searchResults} />
            </div>

        </div>

    );
}

export default SearchPages;
