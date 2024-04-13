import firebase from 'firebase/app';
import 'firebase/messaging';

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
firebase.initializeApp(firebaseConfig);

// Get Firebase Messaging instance
const messaging = firebase.messaging();

// Request permission for notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');
  // Get FCM token
  return messaging.getToken();
}).then(token => {
  console.log('FCM token:', token);
}).catch(error => {
  console.error('Unable to get permission to notify.', error);
});

// Handle incoming messages
messaging.onMessage((payload) => {
  console.log('Message received:', payload);
});
