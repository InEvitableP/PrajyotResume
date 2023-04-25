'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "11df6b855ce64adaa92a6a289a3f1b58",
".git/config": "354f9f14dfc9c8bd67f41bcfec6758b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f07a66d1b603f347f275945968bb92c2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "16d121ee646d1537106ea9d42f44e1b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69d4c28808623fa15dbc5f88074b7584",
".git/logs/refs/heads/master": "69d4c28808623fa15dbc5f88074b7584",
".git/logs/refs/remotes/origin/main": "f707d1adeab1678fac45c018fbb02b8b",
".git/logs/refs/remotes/origin/master": "80604dfdb0e03050ccae86c95c23812e",
".git/objects/06/db9778ccf31ea1979f13aa45662af7349ea84e": "da3925cec31a9c3805f461087c483625",
".git/objects/07/9668d0ed5e90328daa5bd2bb9344a509afec7a": "ce683e14d24948f94b4df5091ec4e621",
".git/objects/09/43409e6af8b30457738db28ccc5c928a7152ce": "c8c79d3c76f2af9f2a66539fe5b6c9ba",
".git/objects/1c/0a159bddde1f0b1db3ef8bff319eecc450a024": "b1a5ca55b5bb398bd5573a2e96d0ced7",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/fe39aeea0463066368f6ee39f83f2692192606": "b3d852c7795a872dbeedadeae6737418",
".git/objects/30/ccb41ecd1892357d1f1c65af00ae3563f19c0b": "a0ea58b4c418e76c694fa26ab99a15d3",
".git/objects/36/599abb65e5694b88fc97b83d6473433091d67c": "b6d6b5ba08750a75024ce623dbb919fd",
".git/objects/38/52cf0f10ff08b152fa570edac78cb98be7197f": "843eb33526884c58dfe8b7b76ed71c94",
".git/objects/46/a0b5fe042f84711192d3e13114b5fc6c2074f9": "f6d53995f426b8fb17190dff182f5777",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/02c1afc947d0dedb991b30d53128ad62518dbc": "38dc4e9caa6cfc5d01ddc08ecd0eab60",
".git/objects/51/911591ecdcbdf2f8614f0d26fab2141485bfb6": "450d5b1b6bd78cd17473ccba5d6785ef",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/58/66d59968ed941bd4d3480bc4f77e6de1793f47": "686d3216b4e5c834dc214397df4f7534",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/6c/ac51eb05c97f39e9bc4c97e9f00e46619f9f18": "6792b505469e909bf0e6c0bfa9862361",
".git/objects/74/571bee06ae6b0e9eded10586b7c3da664cf6a4": "c800463714436cca64784cd7da93794d",
".git/objects/87/094b9f0d54191df8eb9201c6803148f9a9d126": "5b75dfd11182322f3080a50a56b20096",
".git/objects/88/29237e97cb74dae88ed98642fae0e4b7258b40": "70e8a3f6453e7e7c6b3d906890ad1f6a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/6029662d78da589f8b836e6021ca3d9d37adde": "b9e80142ebf14f1cbafd93efaed1cc69",
".git/objects/90/04deaad39f15ecd5c3a4696551f6ebbc660397": "b34000746045fbf49cb5e681e1967a99",
".git/objects/91/cdcc784b6df51ce788484b365a28994f746f3a": "9f05b1924d1365ee0e680c1685a35874",
".git/objects/91/fe6e7a8fa55a89d56907d9357e17a56e0b5b32": "cbf97b70e3695f510bacc41f28071b1b",
".git/objects/a0/fff8d4fd98554f7f3c8ba38f7f9a02c7607839": "b9d4ee7c29bf4407453ec0bd2f0c8cd5",
".git/objects/a1/b2c4aad1b6719a0feaed90ee963b7b9fadf4c2": "099dc82e299ff39e7e6b1b91bca54632",
".git/objects/ad/798097c13954fe7b71399c0927610149e32b34": "528242c367c7cec95602e1b33f5af6de",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b4/25823a90b7adc28d7242e5e90cf56d586e8e1f": "bc951b80f39bed57fe65003be32e0674",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/ba/5b8118fda90325dd1f7ab7313c6722a4869265": "8663890d31c66e074d564db5570bb3dc",
".git/objects/bb/43a4e5cad3c243ed8f53e396b46e0301f8f257": "f98952dfc04e3c892a050cb4c667825d",
".git/objects/c2/a1d7b701e05bc88923c8f2f3bbc60735415a5f": "a185be5516aee8b95747ca2efdf73f54",
".git/objects/d0/6e38e5a8e7d4b10deb199609f3ac65bf3ca72d": "559fab29fc32a6df9af23cb0128d9a02",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/5ee71b8b2dc842f1e0800f29799775a32b4661": "f9b1078c0b34f92677d2f8a5b0c7d32e",
".git/objects/d6/34e6f607e93e082921cec9f71adc45c82e1feb": "cfc6f1983f3dd1f807e6cc73e5c6a2c4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/7387b07c55a74c294a4f9cbfc2a85530376c4c": "6875e4adf89e596730988828c420629a",
".git/objects/dc/cd1d5bc6d2cc956736d3ec4a110cde78498d64": "f996163240a615a09b87c84ef0a7bb54",
".git/objects/e2/0d4ee9303dbaefbbce91d79e13c1e7a3f8c12e": "7b195023091aecf9c16bb7833b965877",
".git/objects/e5/d2d4942d821c443267444ecdc1db28add9fd5c": "7338a54c3d7471141eb1c404ea7386da",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cadb3e0f3a78632f77affffcd3f7af29c9c4bf": "d8406b4827244589be07d90761ef453c",
".git/objects/f0/4c0bcb65e163893224942c125a09cfbf1e82bd": "ccf6812d38cb247bd0ae1a19cc917a21",
".git/objects/f0/6f0d1b502c26527e37aece90c30bb9c6c2c4e6": "a2632d785db1259ddcd1624065db5833",
".git/objects/f9/c9a0c9a4a5f9ea4b996e35cf93d93d5d756c10": "ae2419ecae62df4d15844694c3636d1c",
".git/objects/fa/4658d48b9a49922fa162eb9c9af3b7c1c7dcba": "22cbb48b3bfa95604d45bc31b2e9aecb",
".git/objects/fa/c8ff1911f0776a73e2afe621ccfe4c4ae14077": "a474dc93d9ead0c630d36162ef551408",
".git/objects/fb/79db771c6542abb598e64f4e6736943abf2f88": "63fbc74a6e4c1224f503d4b458ce09c4",
".git/refs/heads/master": "93ea995317381cf322e0dae37d3981aa",
".git/refs/remotes/origin/main": "7ebb8093efb4fa9ca0b4b9c4d20c22da",
".git/refs/remotes/origin/master": "93ea995317381cf322e0dae37d3981aa",
"assets/AssetManifest.bin": "5e71e23618f06637c36733fbff35507a",
"assets/AssetManifest.json": "b460b36d91f4118e19fcc76e6296815d",
"assets/assets/fonts/Gotu-Regular.ttf": "b1ad906e791958493c06fa7bb9ab1d32",
"assets/assets/fonts/Mohave-Light.ttf": "435f435617cabb608c2a639a325fd9bd",
"assets/assets/images/1.jpeg": "7bd175b29945bc8487158809e022d253",
"assets/assets/images/2.jpeg": "9f6bb8d6223bf512fee78bf701689ff9",
"assets/assets/images/3.jpeg": "c39ea051c312a004834e5db77d594f88",
"assets/assets/images/4.jpeg": "ae67a93738851cc4c08ebd1b2b1b3f26",
"assets/assets/images/5.jpeg": "fb64d5e3667161928b9233883daad3bc",
"assets/assets/images/6.jpeg": "246f873e52d7a85f704b84bdd11e9c59",
"assets/assets/images/github_logo.png": "a17150d90465d2bb381781ab5baf0147",
"assets/assets/images/Prajyot_Resume.png": "c80ebd1c366829e9bfcb52a701dd5e2c",
"assets/assets/images/Prajyot_Resume.svg": "d09b632499af1804d512c37203abbf67",
"assets/assets/images/search-icon_outline.png": "807df2b0768831fb5778edff56fe26d7",
"assets/assets/images/search_icon_filled.png": "1c7572cd8b6a3e21661e5678b50252f0",
"assets/FontManifest.json": "e548e8de76b395fce9d6f39b6b350efd",
"assets/fonts/MaterialIcons-Regular.otf": "dd8701c6f20b6c66710013d7c12f3cd3",
"assets/NOTICES": "467e98f408be30b08653a17da628e8fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "296ba26fdb37b50c239d4ead66144d01",
"canvaskit/chromium/canvaskit.js": "c5ff0f8767a7ea0962b15d1f1832002d",
"canvaskit/chromium/canvaskit.wasm": "c6b1144d5baffbdd9482ee820dbd7dc9",
"canvaskit/skwasm.js": "3dbd05be6db4a4154ce733ff194dcae7",
"canvaskit/skwasm.wasm": "f767200511478d7f7052f2b536d82875",
"canvaskit/skwasm.worker.js": "23be0fdafa5ddef67734292a576f8fe3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "b853c8330de10a662992c84ca4b2c081",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a1cf86357347e4c053b4e1032ac7c000",
"/": "a1cf86357347e4c053b4e1032ac7c000",
"main.dart.js": "e3e3651a0348569c92c7799da552c9bb",
"manifest.json": "5d12f1c2754d21328268414a58a35e53",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
