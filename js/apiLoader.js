async function loadApiCards(){



const loader =
document.getElementById(
"loader"
);



const progress =
document.getElementById(
"loadingProgress"
);



const text =
document.getElementById(
"loadingText"
);




let savedCards =
getApiCards();



if(savedCards && savedCards.length){


progress.style.width="100%";

text.innerHTML=
"Colección cargada";



window.cards =
savedCards;



createCards(
window.cards
);



setTimeout(()=>{

loader.style.display="none";

},500);



return;

}




progress.style.width="40%";

text.innerHTML=
"Buscando cartas Spiritomb...";



const apiCards =
await getSpiritombCards();



progress.style.width="70%";



const cardsFromAPI =
apiCards.map(
(card,index)=>{


return {


id:index+1,

pokemon:card.name,

set:card.set.name,

number:card.number,

year:card.set.releaseDate,

rarity:
card.rarity || "Normal",

image:
card.images.large


};


});



saveApiCards(
cardsFromAPI
);



window.cards =
cardsFromAPI;



progress.style.width="100%";

text.innerHTML=
"Listo";



createCards(
window.cards
);



setTimeout(()=>{

loader.style.display="none";

},700);



}