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


        <div class="card ${owned ? "owned":""}" 
        onclick="openModal(${card.id})">


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



                <button 
                onclick="event.stopPropagation(); toggleCard(${card.id})">


                ${owned ? 
                "✅ La tengo" :
                "➕ Añadir"}


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



    saveCollection(
        collection
    );



    createCards(
        window.cards
    );



    updateProgress();


}





function updateProgress(){


    const total =
    window.cards ?
    window.cards.length :
    0;



    const owned =
    collection.length;



    const percentage =
    total > 0 ?
    Math.round(
        (owned / total) * 100
    )
    :
    0;




    const ownedCount =
    document.getElementById(
        "ownedCount"
    );



    const percentageText =
    document.getElementById(
        "percentage"
    );



    const progress =
    document.getElementById(
        "progressFill"
    );



    if(ownedCount){

        ownedCount.innerHTML =
        `${owned} / ${total}`;

    }



    if(percentageText){

        percentageText.innerHTML =
        `${percentage}%`;

    }



    if(progress){

        progress.style.width =
        percentage + "%";

    }


}