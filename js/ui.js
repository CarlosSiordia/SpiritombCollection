let collection = getCollection();



function createCards(cards){


const container =
document.getElementById(
"cardContainer"
);



container.innerHTML="";



cards.forEach(card=>{


const owned =
collection.includes(card.id);



container.innerHTML += `


<div class="card ${owned ? "owned":""}">


<div class="cardImage">

<img src="${card.image}">

</div>



<div class="cardBody">


<h2>
${card.pokemon}
</h2>


<h3>
${card.set}
</h3>


<p>
Número: ${card.number}
</p>


<p>
⭐ ${card.rarity}
</p>



<button onclick="toggleCard(${card.id})">


${owned ? "✅ La tengo":"➕ Añadir"}

</button>


</div>


</div>



`;



});


}




function toggleCard(id){



if(collection.includes(id)){


collection =
collection.filter(
card=>card !== id
);


}

else{


collection.push(id);


}



saveCollection(collection);



createCards(cards);



updateProgress();


}




function updateProgress(){


const total =
cards.length;


const owned =
collection.length;



const percentage =
Math.round(
(owned / total) * 100
);



document.getElementById(
"ownedCount"
).innerHTML =

`${owned} / ${total}`;



document.getElementById(
"percentage"
).innerHTML =

`${percentage}%`;



document.getElementById(
"progressFill"
).style.width =

percentage + "%";


}