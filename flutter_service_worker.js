'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2726f121e2c8c8d93988adba5e9d3c5e",
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
"assets/assets/images/letras/a.png": "e6db0ffa361b9a503e569cc07198b580",
"assets/assets/images/letras/b.png": "5c00b71de4b84ca0c75669159f9fe743",
"assets/assets/images/letras/c.png": "509350ee90e6e3140c8eaf477e70faae",
"assets/assets/images/letras/d.png": "ff2a352672d680ce76ed9bddf85ea103",
"assets/assets/images/letras/e.png": "1c35721cb365d3a3ce4e51a50f248c7a",
"assets/assets/images/letras/f.png": "54eeea58533a4934731444a952054a0d",
"assets/assets/images/letras/g.png": "79195f544b47e3eaedc952db63f7a0b8",
"assets/assets/images/letras/h.png": "d3bc4378d07e0f211136621c8557230e",
"assets/assets/images/letras/i.png": "3a3a21072ee6de64788685a86486eeb9",
"assets/assets/images/letras/j.png": "33ebd7f810419131c3d52c887ec6c986",
"assets/assets/images/letras/k.png": "4263ffe08d752b11aec69a89eeeb335e",
"assets/assets/images/letras/l.png": "716e39fb5f7af811c6b9750b0c73943f",
"assets/assets/images/letras/m.png": "1d94b8306393222cb216ac645a357ffd",
"assets/assets/images/letras/n.png": "9ad33801a4716527f5785245ab6bda68",
"assets/assets/images/letras/o.png": "f54236dfa0c3dd9708844d14ece69940",
"assets/assets/images/letras/p.png": "c500ecb4220d8e4d0a980f41ea55448d",
"assets/assets/images/letras/q.png": "31cac7941d2f7423841ea0877da06571",
"assets/assets/images/letras/r.png": "f5993959b2e002f407db145abb2421c5",
"assets/assets/images/letras/s.png": "edf34bfde8aeb5a76cecec8076272f5d",
"assets/assets/images/letras/t.png": "b15db49df44d5cb5254a01483c9b5d7f",
"assets/assets/images/letras/u.png": "abec838e9052f498b20a218a221dc76b",
"assets/assets/images/letras/v.png": "a61bb7a9dacf581b1aa3ac563b85ed7d",
"assets/assets/images/letras/w.png": "7d5af56ef71d5af27b3236130d536277",
"assets/assets/images/letras/x.png": "c5635576cee49c090d6e9c90a12cd928",
"assets/assets/images/letras/y.png": "703682214ad1c2d864d01696baa84e18",
"assets/assets/images/letras/z.png": "b63d258679cdf1f9d7e72ba4ad45edbc",
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
"assets/database/database.json": "9da962cf9ed41e299660905116b7b712",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0a66c7cf71ec95aabfcdbecffcd4e861",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "19c6e6be7f903cbab27d4853c6e4cc0f",
"/": "19c6e6be7f903cbab27d4853c6e4cc0f",
"main.dart.js": "8ed4a046f62c7a5cf4f9415b2841cf9b",
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
