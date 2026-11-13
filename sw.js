// Minimal service worker: makes the app installable on Android.
// Network only, no caching, so volunteers always get the latest version.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
