'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "83465e7074dfa6650e952184d9212c97",
"assets/assets/images/addTemaButton.png": "9dbc9e04f2ac30404fffbfa0045fbbe1",
"assets/assets/images/alfabeto.png": "d79bfe17ead7435c31bd5039a7a09ebd",
"assets/assets/images/animais.png": "bf8a7ba724f345fe027a5bfb4221ab97",
"assets/assets/images/back.png": "eeec63991f9ab28520f49f0ccdeb5634",
"assets/assets/images/brinquedos.png": "986bc271f82482b169da44d2e8b3298b",
"assets/assets/images/cancel.png": "17dd9588cb9f88e312cce070de5edb6e",
"assets/assets/images/configButton.png": "91e587377351aeafe03a03f8a955dbcc",
"assets/assets/images/consoantes.png": "8b5595893b2516f3d335cf7a03746062",
"assets/assets/images/cores.png": "1a908794a7f743de0aa63cc5f36c3193",
"assets/assets/images/corpo.png": "0a3c34cd51c65e380d677b2cce7dd7e4",
"assets/assets/images/falar.png": "d7d84c8cfa1ab91acf299465fc37a634",
"assets/assets/images/frutas.png": "1fedfcb917faebe78dbdeca7d051daef",
"assets/assets/images/homeButton.png": "d52f2a4e54b1eee89bca219cd9a5c58c",
"assets/assets/images/infoButton.png": "19dce29bcfa51b6b9d65dc622679049e",
"assets/assets/images/keyboard.png": "dbb1ddf41b5365bb6cd8adcb3a58b71d",
"assets/assets/images/logo.png": "ad8c83ae175059942999f631f31de039",
"assets/assets/images/objetos.png": "d21041cf0825c08c233b7a2887c51de4",
"assets/assets/images/paises.png": "9c0b36001e027f9b808c1aeb8f29f4a5",
"assets/assets/images/playButton.png": "0b3efc014b2e23af9931fe1a5b1bc582",
"assets/assets/images/salvar.png": "a783e2e8409ae752cbffe25d66b857c6",
"assets/assets/images/televis%25C3%25A3o.png": "091ffe4238d50303729819752d579357",
"assets/assets/images/tv.png": "17063b89adf070cf1d7a5ddce4cdaac3",
"assets/assets/images/visualiza%25C3%25A7%25C3%25A3o.png": "4f73bdc08a9ccd44a1062b41f930ea5e",
"assets/assets/images/vogais.png": "eb7d7fe75e3bb46591246a0e82ff2b62",
"assets/assets/images/vogaisKeyboard.png": "c0cc6824d938976b3e077708301989a2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1e1232d008a39a1b965c7a238bd622a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8536b2c81e19e7cd448593e1f1ad9e44",
"/": "8536b2c81e19e7cd448593e1f1ad9e44",
"main.dart.js": "3696454fe42e71e4525790e8041b5ba5",
"manifest.json": "174c649e79b7a441affa8ce6971630a5",
"version.json": "524c25fe98d39de7bcd6d89c6e86eb72"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
