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

// ব্যাকগ্রাউন্ডে নোটিফিকেশন রিসিভ করা (ফোন ব্যাকগ্রাউন্ডে বা স্ক্রিন অফ থাকলেও শো করবে)
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification ? payload.notification.title : payload.data.title;
    const notificationOptions = {
        body: payload.notification ? payload.notification.body : payload.data.message,
        icon: '/icon.png', // আপনার ওয়েবসাইটের লোগো লিংক
        badge: '/icon.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
