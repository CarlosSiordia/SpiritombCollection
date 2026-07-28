const CACHE_NAME="spiritomb-v1";


const FILES=[

"./",
"./index.html",
"./css/style.css",
"./css/cards.css",
"./js/app.js",
"./js/cards.js",
"./js/ui.js"

];


self.addEventListener(
"install",
event=>{

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache=>{

return cache.addAll(FILES);

})

);

});



self.addEventListener(
"fetch",
event=>{

event.respondWith(

caches.match(event.request)
.then(response=>{

return response || fetch(event.request);

})

);

});