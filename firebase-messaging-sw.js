/* FCM 백그라운드 서비스워커 — 출퇴근 알림 */
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            'AIzaSyAFjZebURTifQwSLoyUNMRsMc7xqIyH5ns',
  authDomain:        'unies-3f7f1.firebaseapp.com',
  projectId:         'unies-3f7f1',
  storageBucket:     'unies-3f7f1.firebasestorage.app',
  messagingSenderId: '318867913430',
  appId:             '1:318867913430:web:19280fa7cf1d34cc292777'
});

// firebase.messaging() 초기화만으로 webpush.notification 은 브라우저가 자동 1회 표시.
// onBackgroundMessage 에서 showNotification 을 또 호출하면 알림이 2번 뜨므로 두지 않는다.
firebase.messaging();
