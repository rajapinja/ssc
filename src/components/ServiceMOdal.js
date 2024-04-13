import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { BASE_URL } from '../app/Config';

// Make sure to set the appElement to remove accessibility warnings
Modal.setAppElement('#root');

const ServiceModal = ({ isOpen, onRequestClose }) => {

  const [serviceName, setServiceName] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [town, setTown] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [createdDate, setCreatedDate] = useState(new Date());

    
    // Function to format the date to MySQL format (YYYY-MM-DD)
    const formatDateToMySQL = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Handle date change
    const handleDateChange = (date) => {
        const formattedDate = formatDateToMySQL(date);
        setSelectedDate(formattedDate);        
    };

  const handleSubmit = async (e) => {

    e.preventDefault();
    // Submit the details here
    console.log("Service Name:", serviceName);
    console.log("Name:", name);
    console.log("Mobile Number:", mobileNumber);
    console.log("Town:", town);
    console.log("Email:", email);
    console.log("Service Required Date:", selectedDate);
    console.log("Service Created Date:", createdDate);
    
    // Format the created date as well before sending it to back-end MySQL Database   
    const formattedDate = formatDateToMySQL(createdDate);
    // Here you can send the formatted date to the backend
    console.log("Sending date to backend:", formattedDate);
    const requestBody ={
        name: name,
        phone:mobileNumber,
        email:email,
        service:serviceName,
        service_date:selectedDate,
        town:town,
        //created_date:formattedDate
    }
    console.log("requestBody :",requestBody);
    await axios.post(`${BASE_URL}/api/servicerequest`, requestBody)
    .then(response => {
        // console.log("We have received response from PYTHON..!");
        console.log("states :", response.data.message);      
    }).catch(error => {            
        console.error('Error:', error.message);        
    });  
    // Reset the form
    setServiceName('');
    setName('');
    setMobileNumber('');
    setEmail('');
    setTown('');
    setSelectedDate(null);
    // Close the modal
    onRequestClose();
  };

  return (
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        style={{
            content: {
                width: '380px',
                height: '480px',
                margin: 'auto',
                borderRadius: '10px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                marginBottom: '16px',
                borderWidth: '6px',
                borderColor: 'blue' 
              
            }
          }}
    >
        <div style={{ marginTop:'-60px', marginBottom: '40px', textAlign: 'center', borderBottom: '1px solid #ccc', color:'green' }}>
                <h3>Enter Service Request Details</h3>
        </div>
     
      <form onSubmit={handleSubmit} style={{ alignContent: 'center' }}>       
        <div style={{ marginBottom: '6px' }}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" style={{ height: '30px', borderRadius:'5px', borderWidth: '1px',borderColor: 'blueviolet'   }} required />
        </div>
        <div style={{ marginBottom: '6px' }}>
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" style={{ height: '30px',borderRadius:'5px', borderWidth: '1px',borderColor: 'blueviolet'   }} required />
        </div>      
        <div style={{ marginBottom: '6px' }}>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" style={{ height: '30px',borderRadius:'5px', borderWidth: '1px',borderColor: 'blueviolet'   }} />
        </div>    
        <div style={{ marginBottom: '6px' }}>         
          <select value={serviceName} onChange={(e) => setServiceName(e.target.value)} style={{ height: '32px', borderRadius:'5px',  borderWidth: '1px', borderColor: 'blueviolet' }} required>
            <option value="" style={{ color: 'rgba(0,0,0,0.3)'}}>Select Service</option>
            <option value="Plumber">Plumber</option>
            <option value="Electrician">Electriciam</option>
            <option value="Painter">Painter</option>
            <option value="Brick Worker">Brick Worker</option>
            <option value="Home Services">Home Services</option>
            <option value="Sand Services">Sand Services</option>
            <option value="Morter Services">Morter Services</option>
            <option value="Delivery Services">Delivery Services</option>
            <option value="Brick Services">Brick Services</option>
            <option value="Construction Workers">Construction Workers</option>
            <option value="Construction Tools and Equipment">Construction Tools and Equipment</option>
            
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={{ marginBottom: '6px' }}>         
          <select value={town} onChange={(e) => setTown(e.target.value)}  style={{ height: '30px', borderRadius:'5px',borderRadius:'5px', borderWidth: '1px', borderColor: 'blueviolet'   }} required>
            <option value="" style={{ color: 'rgba(0,0,0,0.5)'}}>Select Town</option>
            <option value="Armoor">Armoor</option>
            <option value="Nizamabad">Nizamabad</option>
            <option value="Nirmal">Nirmal</option>,
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <DatePicker 
            selected={selectedDate} 
            onChange={handleDateChange} 
            dateFormat="yyyy-MM-dd"
            placeholderText="Select Service Date"
            className="custom-datepicker" 
            calendarClassName="custom-calendar"
            />
        </div>
        <div style={{ marginBottom: '6px' }}>
          <DatePicker 
            selected={createdDate} 
            onChange={(date) => setCreatedDate(date)}           
            className="custom-datepicker" 
            calendarClassName="custom-calendar"
            dateFormat="yyyy-MM-dd" 
            readOnly
          />
        </div>
        <button type="submit" style={{ textAlign: 'center', height: '36px', width: '180px', marginTop:'56px', borderRadius:'8px',borderWidth: '1px', borderColor: 'blue' }} >SUBMIT</button>
      </form>
    </Modal>
  );
};

export default ServiceModal;
