const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account credentials
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Define the message payload
const message = {
  notification: {
    title: 'New Message',
    body: 'You have a new message from MyApp!',
  },
  topic: 'allUsers', // Send notification to all users subscribed to the 'allUsers' topic
};

// Send the message
admin.messaging().send(message)
  .then((response) => {
    console.log('Notification sent successfully:', response);
  })
  .catch((error) => {
    console.error('Error sending notification:', error);
  });
