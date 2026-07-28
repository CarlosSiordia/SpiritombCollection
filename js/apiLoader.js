async function loadApiCards(){


    let savedCards =
    getApiCards();



    if(savedCards){


        console.log(
        "Cargando cartas guardadas"
        );


        window.cards =
        savedCards;


        createCards(cards);


        return;

    }



    console.log(
    "Consultando API..."
    );



    const apiCards =
    await getSpiritombCards();



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
            card.rarity || "Unknown",

            image:
            card.images.large

        };


    });



    saveApiCards(
    cardsFromAPI
    );


    window.cards =
    cardsFromAPI;


    createCards(cards);



}