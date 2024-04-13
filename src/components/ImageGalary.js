import React from 'react';
import ImageCard from '../components/ImageCard';
import '../css/images.css';

// Sample data for cards
const imageData = [
  { id: 1, title: 'Home Repairs', imageUrl: require('../images/Home_Repair.jpg').default },
  { id: 2, title: 'Brick Worker', imageUrl: require('../images/BrickWorker.jpg').default },
  { id: 3, title: 'Construction Worker', imageUrl: require('../images/Construction_Worker.jpg').default },
  { id: 4, title: 'Construction Tools Supplies', imageUrl: require('../images/Constructiontoolssupplies.jpg').default },
  { id: 5, title: 'Construction Worker', imageUrl: require('../images/ConstructionWorker.jpg').default },
  { id: 6, title: 'Cartoon Electrician', imageUrl: require('../images/Cartoon_Electrician.jpg').default },
  { id: 7, title: 'Deliveray Services', imageUrl: require('../images/delivery_service.jpg').default },
  { id: 8, title: 'Essential Electrician Tools', imageUrl: require('../images/EssentialElectricianTools.jpg').default },
  { id: 9, title: 'Home Repairs', imageUrl: require('../images/Home_Repair.jpg').default },
  { id: 10, title: 'Painting Services', imageUrl: require('../images/painting_service.jpg').default },
  { id: 11, title: 'Plumbing Services', imageUrl: require('../images/Plumbing_Service.jpg').default },
  { id: 12, title: 'Construction Worker', imageUrl: require('../images/Construction_Worker.jpg').default }
  
];

// Component to display image cards
const ImageCardList = ({ images }) => (
  <div className="card-deck">
    {images.map((image) => (
      <ImageCard key={image.id} {...image} />
    ))}
  </div>
);

// App component
const ImageGalary = () => {
  return (
    <div className="container">
      <h1>Image Gallery</h1>
      <ImageCardList images={imageData} />
    </div>
  );
};

export default ImageGalary;
