import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value); // Update searchQuery state with the input value
    };

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
        onSubmit(searchQuery); // Call the onSubmit function passed from props with the searchQuery
        setSearchQuery(""); // Clear the searchQuery state
    };

    return (
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
    )
}

export default SearchBar;
