import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate(); 

    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value); 
    };

    return (
        <div className="search-page">
            <div className='search-bar'>
                 <form onSubmit={event => {
                    event.preventDefault();
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
