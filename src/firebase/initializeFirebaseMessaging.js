import firebase from 'firebase/app';
import 'firebase/messaging';

const initializeFirebaseMessaging = () => {
  const firebaseConfig = {
    // Your Firebase configuration
  };

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();

  // Request permission for notifications
  messaging.requestPermission().then(() => {
    console.log('Notification permission granted.');
    return messaging.getToken();
  }).then((token) => {
    console.log('FCM Token:', token);
    // Send token to backend server for subscription
  }).catch((err) => {
    console.log('Error obtaining notification permission:', err);
  });

  // Handle incoming messages
  messaging.onMessage((payload) => {
    console.log('Message received:', payload);
    // Handle notification display
  });
};

export default initializeFirebaseMessaging;
