importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyA8jX_M4iqwdMm-RP10CUjd664GZrnrmQA",
  authDomain: "rz-mod-menu.firebaseapp.com",
  databaseURL: "https://rz-mod-menu-default-rtdb.firebaseio.com",
  projectId: "rz-mod-menu",
  storageBucket: "rz-mod-menu.firebasestorage.app",
  messagingSenderId: "426988321516",
  appId: "1:426988321516:web:33c8fd9492ee0ad58b03c9",
  measurementId: "G-EDC9TH795S"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification ? payload.notification.title : (payload.data ? payload.data.title : "New Notification");
    const options = {
        body: payload.notification ? payload.notification.body : (payload.data ? payload.data.message : ""),
        icon: 'https://cdn-icons-png.flaticon.com/512/3602/3602145.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/3602/3602145.png'
    };
    self.registration.showNotification(title, options);
});
