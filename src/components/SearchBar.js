import React from 'react';

const SearchBar = ({ handleSearchQuery }) => {

  const handleSearch = (e) => {
    handleSearchQuery(e.target.value);
  };

  return (
    <input 
      type="text" 
      placeholder="Search images..." 
      onChange={handleSearch} 
      style={{ 
        marginBottom: '20px', 
        width: '100%', 
        borderRadius:'8px', 
        padding: '10px', 
        boxSizing: 'border-box', 
        border: '2px solid blue',
        borderColor: 'lightgreen', // Change border color to blue
        boxShadow: '0 4px 8px rgba(7, 219, 78, 0.4)'
        }}
    />
  );
};

export default SearchBar;
