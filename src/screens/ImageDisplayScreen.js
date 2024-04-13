
import React, { useState } from 'react';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';
import imageData from '../components/ImageData';
import '../css/images.css';

// Component to display image cards
const ImageCardList = ({ images }) => {
  // Chunking the images into rows with 5 cards each
  const rows = [];
  for (let i = 0; i < images.length; i += 6) {
    rows.push(images.slice(i, i + 6));
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div className="card-deck" key={rowIndex}>
          {row.map((image) => (
            <ImageCard key={image.id} {...image} />
          ))}
        </div>
      ))}
    </div>
  );
};

// App component
const ImageDisplayScreen = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Filter image data based on search query
  const filteredImageData = imageData.filter(image => {
    return image.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Determine the number of columns based on the number of search results
  const numColumns = Math.ceil(Math.sqrt(filteredImageData.length));

  const handleSearch = (query) => {
    // Update search query state
    setSearchQuery(query);

    // Filter search results
    const results = imageData.filter(image => {
      return image.title.toLowerCase().includes(query.toLowerCase());
    });

    // Update search results state
    setSearchResults(results);

    // Show search results box if there are search results
    setShowSearchResults(results.length > 0);
  };

  return (
    <div className="container">
      <h4 style={{textAlign:'center', marginBottom:'-40px'}}>Service Registration</h4>
  
      {/* Search input container with solid background color */}
      <div className="search-bar-container"> {/* Apply styles to this div */}       
        <SearchBar handleSearchQuery={handleSearch} />
      </div>      

      {/* Display default services */}     
      <div className="card-container">
        <ImageCardList images={filteredImageData} />
      </div>
    </div>
  );
};

export default ImageDisplayScreen;
