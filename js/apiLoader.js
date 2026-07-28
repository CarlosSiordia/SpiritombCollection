async function loadApiCards(){


    const results =
    await searchSpiritomb();



    if(results.length===0){


        alert(
        "No se encontraron cartas"
        );


        return;

    }



    const cardsAPI =
    results.map(
    (card,index)=>{


        return {

            id:index+1,

            pokemon:card.name,

            set:card.set.name,

            number:card.number,

            rarity:
            card.rarity || "Normal",

            year:
            card.set.releaseDate,

            image:
            card.images.large

        };


    });



    createCards(cardsAPI);


}