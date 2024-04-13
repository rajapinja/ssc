
import React from 'react';
import '../css/images.css';
import ImageCard from '../components/ImageCard';

import image1 from '../images/Home_Repair.jpg';
import image2 from '../images/BrickWorker.jpg';
import image3 from '../images/Construction_Worker.jpg';
import image4 from '../images/Constructiontoolssupplies.jpg';
import image5 from '../images/ConstructionWorker.jpg';
import image6 from '../images/Plumbing_Service.jpg';
import image7 from '../images/plumbing_logo.jpg';
import image8 from '../images/SandServices.jpg';
import image9 from '../images/WaterkloofPlumbers.jpg';
import image10 from '../images/Red_Brick_services.jpg';
import image11 from '../images/Plumbing_Service_Concept.jpg';
import image12 from '../images/WallPainter.jpg';
import image13 from '../images/painting_service.jpg';
import image14 from '../images/Cartoon_Electrician.jpg';
import image15 from '../images/EssentialElectricianTools.jpg';
import image16 from '../images/delivery_service.jpg';



// Sample data for cards
const imageData = [
  { id: 1, title: 'Home Repair(s)', imageUrl: image1 },
  { id: 2, title: 'Brick Worker(s)', imageUrl: image2 },
  { id: 3, title: 'Construction Worker(s)', imageUrl: image3 },
  { id: 4, title: 'Construction Tools Supplies', imageUrl: image4 },
  { id: 5, title: 'Construction Worker(s)', imageUrl: image5 }, 
  { id: 6, title: 'Plumbing Services', imageUrl: image6 },
  { id: 7, title: 'Plumbing', imageUrl: image7 },
  { id: 8, title: 'Sand Services', imageUrl: image8 },
  { id: 9, title: 'Water Kloof Plumbing', imageUrl: image9 },
  { id: 10, title: 'Red Brick Service', imageUrl: image10 },
  { id: 11, title: 'Plumbing Services', imageUrl: image11 },
  { id: 12, title: 'Delivery Services', imageUrl: image12 },
  { id: 13, title: 'Essential Electrician Tools', imageUrl: image13},
  { id: 14, title: 'Electrician', imageUrl: image14 },
  { id: 15, title: 'Wall Painter', imageUrl: image15 },
  { id: 16, title: 'Painting Services', imageUrl: image16}
];

const [searchQuery, setSearchQuery] = useState('');
const [showSearchResults, setShowSearchResults] = useState(false);
const [searchResults, setSearchResults] = useState([]);

// Filter image data based on search query
const filteredImageData = imageData.filter(image => {
  return image.title.toLowerCase().includes(searchQuery.toLowerCase());
});

// Component to display image cards
const ImageCardList = ({ images }) => {
  // Chunking the images into rows with 5 cards each
  const rows = [];
  for (let i = 0; i < images.length; i += 4) {
    rows.push(images.slice(i, i + 4));
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
  return (
    <div className="container">
      <h2>Skill Squad Central</h2>
      <div className="card-container"> {/* Apply .card-container class here */}
        <ImageCardList images={imageData} />
      </div>
    </div>
  );
};

export default ImageDisplayScreen;
