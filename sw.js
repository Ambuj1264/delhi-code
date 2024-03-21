import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from '@next/swc/build';

precacheAndRoute(self);

registerRoute(
  // Cache essential resources like your index page and main JavaScript bundle
  '/',
  new CacheFirst({
    cacheName: 'essential',
  })
);

registerRoute(
  // Cache static assets like images and fonts using StaleWhileRevalidate for updates
  /\.(png|jpe?g|gif|svg|ico|eot|otf|webp|ttf|woff|woff2|css|js)/,
  new StaleWhileRevalidate({
    cacheName: 'static-assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Optionally, cache API routes for offline availability (adjust to your route patterns)
registerRoute(
  '/api/.*',
  new StaleWhileRevalidate({
    cacheName: 'api-data',
  })
);
