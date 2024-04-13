import React, {useState} from "react";
import '../css/images.css';
import ServiceModal from "./ServiceMOdal";


const ImageCard = ({ id, title, imageUrl }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div
        className="card"
        style={{cursor: 'pointer'}}
        onClick={handleOpenModal}        
      >
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
      <ServiceModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
    </>
  );
};

export default ImageCard;