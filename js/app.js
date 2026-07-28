window.onload = () => {

    createCards(cards);

};

if("serviceWorker" in navigator){

navigator.serviceWorker
.register("sw.js")

.then(()=>{

console.log(
"Spiritomb App instalada correctamente"
);

});

}