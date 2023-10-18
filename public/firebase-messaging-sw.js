// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyA-dixi8-rv-gKhhLZZNprN4R0_ZFU7XAQ",
  authDomain: "crwn-clothing-db-b150d.firebaseapp.com",
  projectId: "crwn-clothing-db-b150d",
  storageBucket: "crwn-clothing-db-b150d.appspot.com",
  messagingSenderId: "378000436377",
  appId: "1:378000436377:web:aa4726b00c8870ce2c1c08",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
