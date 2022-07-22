'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6771c1e7130aa81ed62528eb2a6b5760",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/15/ccd5f43dda13fb73916c93cba78625b4bb1862": "8347c2b99ee65404aa924b7e082a8a5f",
".git/objects/23/746ac41e07846d0f02b72aced0c15e1ee64f2f": "988fd1c05e0b3132647b8472a9f25da6",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/5bbad43cbc1921150d2d6e226f143710a30733": "e6f10fb04cbedae8d2ab7d75cf5ac80c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/9af1ab53fc2d5be8ab81923271a113ce873634": "0ef7215e123eff260b7e7e6e2a6061f8",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/5b/3a624947f72ddf519bae2c0d157b8554713301": "8e2eac62edd9f1028657156c6ef07a18",
".git/objects/5c/b9d0ba0a33b8e5b0dce4fb5a6128e75e2d9de0": "5f65d4a9e6cb2a0380cdc775cb7115f4",
".git/objects/65/2c888961ca5578ca5d0b36bdc409ad068b15a2": "726e2c4d4d15ce2064dedde56d70ee3a",
".git/objects/6b/edd80b5932e6f7e8f7dc8504d52cfde960a0f2": "155d4c94c4f27ec0c400be7872dffa0f",
".git/objects/6c/e6823cfb52b92d2c3c7a0399620f72c4f51179": "8dc5af7ec7af9c6f118e53250c04762b",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/548014d9a9e0aa43590f91a38159b7149f7cce": "0709085dc16f4774822ed290756e9e3c",
".git/objects/85/781224bbc210d7f8c50796cd4b6586521985cb": "c7ec5c1fa62f50c599cfdbc1b62ec77c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0889227817a555b8a9a2099f853f1af8494533": "c33b561027e6787373a9515b7c99541d",
".git/objects/96/7bbc494bacf41537c10e7395c3a6df5f635c2e": "e47f9ff2265d5252f2d6413d837d5d99",
".git/objects/9b/da14209b8221acd70c1a1a0c094da68900f7d7": "71ac6fb526b091f00f8077822ef78627",
".git/objects/a0/a59b54eb8e74c9e4aa2b0c63883bd73cb717d8": "d0635d306f7ff0d94ea74cf0b5ef53a3",
".git/objects/a5/1e2f1661d96139c4f272952b892820c8ccf311": "6e3b517a0b19a7f775f0590feb43cbe6",
".git/objects/a5/9b64da1056e4cc6f0593d0d675967f228323af": "4c242fa98ec0fbf7358370b385ec7293",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b0/b00ef3052e6a7c12deeccc92326f2cbc3a3e26": "ae6012c6b1b2f2c1d8c0bb3c36ef0543",
".git/objects/b6/cfb5b2de96d1e8e5e0e68d03f9a097d2237e77": "06bd5dbbfe222ca030a2e5d8b95227ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/dee75e46aaec6be1d9217e7f124f029fd2eb58": "c3734066c93345cd11808f0f6bb9ed21",
".git/objects/c9/39d69dcbc373e52099e0e4c1709c0c5809cc01": "96e18138fafc5488396b4ff6f9520146",
".git/objects/cd/bd639e91d000142536d7d74fcb9c4ad87d181f": "33afc486a814c4487e5985cef3b74bec",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/b4c26ce23874d215c6c3b110c30dce8a2a4781": "cfe99fe29e38fa4cc591a3bb8f8bb590",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/eb/0d9f28d6ef4f7f3d0180790178ac93d13f043b": "2c640e84f0367bc521a09f3a3ecec551",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ec8eafda9e7823d454c7367d7213bd0ea98cf4": "8eb701a7a03b654e7d7b5a9d571e200a",
".git/objects/f3/2ab2376755b32b70b11fa8170820dc75ddb3bd": "520944e49615aa9b51b5ad4a7667c888",
"assets/AssetManifest.json": "da73d39bff2458bcd2d7e36c163ff6b8",
"assets/assets/gifs/developeryoga.gif": "c99c703227604eeb573d4dddb2e8844f",
"assets/assets/gifs/loading.gif": "550af69ee2bc827a3ab7add2bd1ef856",
"assets/assets/gifs/machinelearning.gif": "f5a578f1c043ca341a56a0fb08c12c6e",
"assets/assets/gifs/mobiledevelopment.gif": "a24c8fecb0ef690965f446021a1c4233",
"assets/assets/i18n/ar.json": "75462bb12ebdd8c33434a2429a5df6e6",
"assets/assets/i18n/en.json": "a54c165295fd60cd9b624d8fdc508e53",
"assets/assets/icons/analysis.png": "ab22f812a114bd265ffc8a1beeb0513c",
"assets/assets/icons/dartIcon.png": "b8e5b67cbdbaa6d71f55c373f611f20c",
"assets/assets/icons/Figma.png": "f75992f2f361488124e54fa58f58110c",
"assets/assets/icons/flutterIcon.png": "3edbc091bfa245a39109d3613f7656a2",
"assets/assets/icons/javaScriptIcon.png": "e75551b7fdb68627caf5c65209e65245",
"assets/assets/icons/MLIcon.png": "448f8f7497d202c404265c724d395b2b",
"assets/assets/icons/NodeJsIcon.png": "5de5b4f889974b22bb5b82b8a4d46271",
"assets/assets/icons/PythonIcon.png": "dbe6343bc245ff440dfe7419bfd7a2b3",
"assets/assets/images/bk.png": "8525f672bf4ec3168f63b88ddd6563f9",
"assets/assets/images/developer.png": "5f02c6abcfc6dcb9b2a31274282d3a5c",
"assets/assets/images/meSmilling.jpeg": "c126a5778d22a938c61c01213f1f9c1a",
"assets/assets/images/myNameLogo.png": "bf4529b1f9efee752fa006ee17641f4a",
"assets/assets/images/undraw_developer_activity_re_39tg.svg": "7207ef2207383347595a965b9cb66f5b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b5869616e320caf68d80a24575e92c48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a5f4576e2716d5117e361e4922fab273",
"/": "a5f4576e2716d5117e361e4922fab273",
"main.dart.js": "5239ad8c236f1d25c10fdece15cd3220",
"manifest.json": "7a2a7efe8e7c45bc86b94c13971578db",
"version.json": "5ba04a528ce256f6e6d5de29dc60a6d8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
