import React, { useState } from 'react';
import axios from 'axios';
import '../css/TwillioSMS.css'; // Import CSS file for styles

const TwilioSMS = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendSMS = async () => {
    setLoading(true);
    setError('');

    try {
      // Make API call to your server which sends SMS using Twilio
      const response = await axios.post('/api/send-sms', {
        phoneNumber,
        message,
      });

      console.log('SMS sent successfully:', response.data);
    } catch (error) {
      setError('Failed to send SMS');
      console.error('Error sending SMS:', error);
    } finally {
      setLoading(false);
    }
  };

  const sendWhatsAppMessage = async () => {
    const data = {
      to: 'RECIPIENT_PHONE_NUMBER',
      message: 'Hello from Twilio!'
    };
  
    try {
      const response = await fetch('http://localhost:5000/send-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
    }
  };

  return (
    <div className="form-container">
      <h5>Send SMS</h5>
      <form onSubmit={sendWhatsAppMessage}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send SMS'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default TwilioSMS;
