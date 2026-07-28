window.onload=function(){


createCards(cards);


updateProgress();



if("serviceWorker" in navigator){


navigator.serviceWorker.register(
"sw.js"
);


}


};