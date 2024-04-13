


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
  