importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA8jX_M4iqwdMm-RP10CUjd664GZrnrmQA",
  authDomain: "rz-mod-menu.firebaseapp.com",
  databaseURL: "https://rz-mod-menu-default-rtdb.firebaseio.com",
  projectId: "rz-mod-menu",
  storageBucket: "rz-mod-menu.firebasestorage.app",
  messagingSenderId: "426988321516",
  appId: "1:426988321516:web:33c8fd9492ee0ad58b03c9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});