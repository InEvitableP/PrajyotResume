'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a82972ddc9c770d9b266cc192add1fdb",
".git/config": "354f9f14dfc9c8bd67f41bcfec6758b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8de76c15c7db95a7d80fd11f1d18f863",
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
".git/index": "68bc3463dbddb20c21ee8ab137066a00",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b257dac55167578b739755a2de1246f",
".git/logs/refs/heads/master": "0b257dac55167578b739755a2de1246f",
".git/logs/refs/remotes/origin/main": "f707d1adeab1678fac45c018fbb02b8b",
".git/logs/refs/remotes/origin/master": "924a4ddc20dd2a8ac0f83ee06d5c11e3",
".git/objects/01/cf47c695ece56eb21e721ea92476b281718e5a": "367c2e8fa359eaae3868b1e1c107ea55",
".git/objects/06/db9778ccf31ea1979f13aa45662af7349ea84e": "da3925cec31a9c3805f461087c483625",
".git/objects/07/9668d0ed5e90328daa5bd2bb9344a509afec7a": "ce683e14d24948f94b4df5091ec4e621",
".git/objects/09/43409e6af8b30457738db28ccc5c928a7152ce": "c8c79d3c76f2af9f2a66539fe5b6c9ba",
".git/objects/11/380247cc9cb242d4f78dcca971d66bfba81160": "d1f9676819c15eb2bf4e57cb450116ad",
".git/objects/1c/0a159bddde1f0b1db3ef8bff319eecc450a024": "b1a5ca55b5bb398bd5573a2e96d0ced7",
".git/objects/1c/f7174fa2a849947b14e8f33d61258c4f0a1da3": "f7b047f115bc903d77680d5597bed12a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/fe39aeea0463066368f6ee39f83f2692192606": "b3d852c7795a872dbeedadeae6737418",
".git/objects/1f/0f352159cb67ac879d804b95f0a30646986f08": "67940768d63733c4b1ed684318617c97",
".git/objects/22/58d1c7441b268504b6ff1ee503d5b09f0ae26c": "82536014d6a9272dd872649cbc9c9e15",
".git/objects/22/5fe811a0f426b750c0f67c2f83c1ca11494178": "5bfe691c1352cf6163f619b82b13b1f6",
".git/objects/30/ccb41ecd1892357d1f1c65af00ae3563f19c0b": "a0ea58b4c418e76c694fa26ab99a15d3",
".git/objects/36/599abb65e5694b88fc97b83d6473433091d67c": "b6d6b5ba08750a75024ce623dbb919fd",
".git/objects/38/52cf0f10ff08b152fa570edac78cb98be7197f": "843eb33526884c58dfe8b7b76ed71c94",
".git/objects/42/e85595c7f8e672b13d944d86e0b4cf28c9401a": "6add79ad03351f440ea7df6ef6fd38f7",
".git/objects/46/a0b5fe042f84711192d3e13114b5fc6c2074f9": "f6d53995f426b8fb17190dff182f5777",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/02c1afc947d0dedb991b30d53128ad62518dbc": "38dc4e9caa6cfc5d01ddc08ecd0eab60",
".git/objects/51/911591ecdcbdf2f8614f0d26fab2141485bfb6": "450d5b1b6bd78cd17473ccba5d6785ef",
".git/objects/52/5a1b99d7a3b603f638f5ab06d4375b18103bea": "9cd61046c0ccb83e328d78403d2d204d",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/53/0a0503d9645440274838074b7a1cb3a3edc317": "f09629f506e8eb8676aeb2f7964a43ce",
".git/objects/55/fc68d23be21f9b39eb150626078499cb52a535": "38169b36c256aa5a225b10897d7f7c10",
".git/objects/57/014dc2c448b57768c474a7da7b47041046014a": "f26203e01a0e59eb603d6611aa647310",
".git/objects/58/66d59968ed941bd4d3480bc4f77e6de1793f47": "686d3216b4e5c834dc214397df4f7534",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5f/9f4976fbc51f4fa0c3c1b7cccbcd4e3091d4a2": "1de1c098e9ea846eadbe3675146e2418",
".git/objects/60/ec2138b5b795fac65375cd8c02dcdda07e6d4f": "705fde463c9173a35d80058b2ca511ab",
".git/objects/6a/ababf0cda5f974f3c6adcea3a892982342102b": "43097333ec53e2392d23c1658534ed33",
".git/objects/6c/ac51eb05c97f39e9bc4c97e9f00e46619f9f18": "6792b505469e909bf0e6c0bfa9862361",
".git/objects/6f/8202bcf0bc232fe84dfafe6b422c2ff926eacb": "615f668b108b9cb43e29960322b9c1a1",
".git/objects/73/82c7bcbb4ae6bdea6100af3688c3274888a338": "6f56b80ee379a6183c3ca1d2bb4bc2a5",
".git/objects/74/571bee06ae6b0e9eded10586b7c3da664cf6a4": "c800463714436cca64784cd7da93794d",
".git/objects/75/30b1158d9944b896f6fcbca0f9744ccb0177b9": "a75b32b2e8c158daf4e661f5810c8049",
".git/objects/78/f8ee2d04bd52e9e9fc2b9043c9ac161a2d0f51": "7ab19790a1612fbdd64bf95fcc291797",
".git/objects/87/094b9f0d54191df8eb9201c6803148f9a9d126": "5b75dfd11182322f3080a50a56b20096",
".git/objects/88/29237e97cb74dae88ed98642fae0e4b7258b40": "70e8a3f6453e7e7c6b3d906890ad1f6a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/dd6309e781bfa219743077c774e99634b9f323": "a0f136b1a9e4adff4b84d018bfc56660",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/6029662d78da589f8b836e6021ca3d9d37adde": "b9e80142ebf14f1cbafd93efaed1cc69",
".git/objects/90/04deaad39f15ecd5c3a4696551f6ebbc660397": "b34000746045fbf49cb5e681e1967a99",
".git/objects/90/769c23e41666368e29195edb727461237e4916": "c5d7b82a04715edaf83ff6253c61f536",
".git/objects/91/cdcc784b6df51ce788484b365a28994f746f3a": "9f05b1924d1365ee0e680c1685a35874",
".git/objects/91/fe6e7a8fa55a89d56907d9357e17a56e0b5b32": "cbf97b70e3695f510bacc41f28071b1b",
".git/objects/95/6679e42a6c117542c730ddcee8a2c1f8441d85": "8b5c422c4064abb3f3fd68c0c577eb52",
".git/objects/9a/ebe763741b25291f9336716dbede18fe026d88": "ce69fa6a39aeacd4e08dab751b11fd35",
".git/objects/9f/756cc14910fbd8f5734c70cb2a58a1c84676d4": "b712d96292cc235e4c2fc34ab291dfb8",
".git/objects/a0/fff8d4fd98554f7f3c8ba38f7f9a02c7607839": "b9d4ee7c29bf4407453ec0bd2f0c8cd5",
".git/objects/a1/b2c4aad1b6719a0feaed90ee963b7b9fadf4c2": "099dc82e299ff39e7e6b1b91bca54632",
".git/objects/ab/15e4674be61b7281d555748e6dc61b49b3d849": "989880cd45a72ce61902f6c7720ee927",
".git/objects/ad/798097c13954fe7b71399c0927610149e32b34": "528242c367c7cec95602e1b33f5af6de",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/2bb6227a4d13e158b0690dcb37a7b1071a66e7": "3c89725722cd8997be73fb6d4052f7f3",
".git/objects/b2/49858692bc4c5a44c19b38414a68ee48db1071": "e650afdd46ccb0f081cd693a6bb1574f",
".git/objects/b4/25823a90b7adc28d7242e5e90cf56d586e8e1f": "bc951b80f39bed57fe65003be32e0674",
".git/objects/b6/7edf17c11b34ce377612d3ea9b9d31f68374a8": "110863fa35ffaecd5e08c8420669571c",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/ba/5b8118fda90325dd1f7ab7313c6722a4869265": "8663890d31c66e074d564db5570bb3dc",
".git/objects/bb/43a4e5cad3c243ed8f53e396b46e0301f8f257": "f98952dfc04e3c892a050cb4c667825d",
".git/objects/bc/efbf1481376ce7281cb21e92d774be2f9ef51d": "a0018ad514212bc30a9272b3a772ab64",
".git/objects/c2/a1d7b701e05bc88923c8f2f3bbc60735415a5f": "a185be5516aee8b95747ca2efdf73f54",
".git/objects/cd/189eeba9a462a71131b29c68ac3fc62b8b88d8": "c28aae27b881ab573a62b90dd160f8dc",
".git/objects/d0/6e38e5a8e7d4b10deb199609f3ac65bf3ca72d": "559fab29fc32a6df9af23cb0128d9a02",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/63ffc8f19042c3eea95b8c37c4ca7d58c02141": "8958ee30731ba5dbd7f8e06cc7e3daf4",
".git/objects/d5/5ee71b8b2dc842f1e0800f29799775a32b4661": "f9b1078c0b34f92677d2f8a5b0c7d32e",
".git/objects/d6/34e6f607e93e082921cec9f71adc45c82e1feb": "cfc6f1983f3dd1f807e6cc73e5c6a2c4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/355c76b8f79b5cf0b32a3be991105fa89bcad5": "439c333c17662bd69a2a3934913b767e",
".git/objects/d9/7387b07c55a74c294a4f9cbfc2a85530376c4c": "6875e4adf89e596730988828c420629a",
".git/objects/dc/cd1d5bc6d2cc956736d3ec4a110cde78498d64": "f996163240a615a09b87c84ef0a7bb54",
".git/objects/e0/2d7ce2f1e878d32c47d9b41453d4809f99c24b": "eb3c0a90699df2d6026f0a6a8eedcc74",
".git/objects/e2/0d4ee9303dbaefbbce91d79e13c1e7a3f8c12e": "7b195023091aecf9c16bb7833b965877",
".git/objects/e4/72fab877ef92642613a8d2e19790c2168b650b": "90d8292892b41c08c9f3b638119a662d",
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
".git/ORIG_HEAD": "507efc0c2421609807bbdbdeacb7a029",
".git/refs/heads/master": "0a24d1cddaa8372a06d9cdddc0f4b71a",
".git/refs/remotes/origin/main": "7ebb8093efb4fa9ca0b4b9c4d20c22da",
".git/refs/remotes/origin/master": "0a24d1cddaa8372a06d9cdddc0f4b71a",
"assets/AssetManifest.bin": "97899f306f0fd7ea6b177a496aab0585",
"assets/AssetManifest.json": "69ff8205fc445cb87c6ed651f42a840a",
"assets/assets/fonts/Gotu-Regular.ttf": "b1ad906e791958493c06fa7bb9ab1d32",
"assets/assets/fonts/Mohave-Light.ttf": "435f435617cabb608c2a639a325fd9bd",
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
"CNAME": "83f1739a12fb27c0221ef178697ef9f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "b853c8330de10a662992c84ca4b2c081",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e8b28ee2b3bd5701ce4d3ec164bcff9",
"/": "5e8b28ee2b3bd5701ce4d3ec164bcff9",
"main.dart.js": "d8191b121610a6285e06324875521914",
"manifest.json": "5d12f1c2754d21328268414a58a35e53",
"README.md": "482504a4d1adf12e4e733423ada35931",
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
