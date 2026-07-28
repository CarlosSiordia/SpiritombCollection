function createCards(cards){

    const container=document.getElementById("cardContainer");

    container.innerHTML="";

    cards.forEach(card=>{

        const html = `

<div class="card">

    <div class="cardImage">

        <img src="${card.image}" alt="${card.set}">

    </div>

    <div class="cardBody">

        <div class="pokemonName">

            ${card.pokemon}

        </div>

        <div class="cardSet">

            ${card.set}

        </div>

        <div class="cardNumber">

            #${card.number}

        </div>

        <div class="cardRare">

            ⭐ ${card.rarity}

        </div>

        <button 
class="cardButton"
onclick="toggleCard(${card.id})">

${isOwned(card.id)
?"✅ En colección"
:"➕ Añadir"}

</button>

    </div>

</div>

`;

        container.innerHTML += html;

    });

}