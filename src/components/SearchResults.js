import React from 'react';

const SearchResults = ({ searchResults }) => {
  // Check the number of search results
  const numResults = searchResults.length;

  // Conditionally render the grid layout
  if (numResults <= 2) {
    return (
      <div className="card-container single-row">
        {searchResults.map((result) => (
          <div className="card" key={result.id}>           
              ` <img src={result.imageUrl} alt={result.title} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{result.title}</h3>
                  <p className="card-description">{result.description}</p>
                  {/* Other details or elements related to the search result */}`                
              </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="card-container">
        {searchResults.map((result) => (
          <div className="card" key={result.id}>
            <img src={result.imageUrl} alt={result.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{result.title}</h3>
              <p className="card-description">{result.description}</p>
              {/* Other details or elements related to the search result */}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default SearchResults;
