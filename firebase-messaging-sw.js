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

// webpush.notification 으로 보내면 브라우저가 자동 표시.
// 데이터 전용 메시지 대비용 백그라운드 핸들러(선택).
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  const n = (payload && payload.notification) || {};
  if (n.title) {
    self.registration.showNotification(n.title, { body: n.body || '' });
  }
});
