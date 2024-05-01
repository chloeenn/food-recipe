import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate(); // Import useNavigate hook

    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value); // Update searchQuery state with the input value
    };

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
        navigate(`/search/${searchQuery}`); // Use navigate to go to the search results page
        setSearchQuery(""); // Clear search query after navigation
    };

    return (
        <div className="search-page">
            <div className='search-bar'>
                 <form onSubmit={event => {
                    event.preventDefault(); // Prevent form submission and page refresh
                    navigate(`/search/${searchQuery}`);
                    setSearchQuery("");
                }}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={updateSearchQuery}
                        placeholder="Search..." />
                    <button type="submit" >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;
