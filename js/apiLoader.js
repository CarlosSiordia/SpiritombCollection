let loadedCards = [];



async function loadApiCards(){


    const results =
    await searchCard(
        "Spiritomb"
    );



    loadedCards =
    results.map(
        (card,index)=>{


        return {


            id:index+1,


            pokemon:
            card.name,


            set:
            card.set.name,


            number:
            card.number,


            rarity:
            card.rarity || "Unknown",


            year:
            card.set.releaseDate,


            image:
            card.images.large


        };


    });



    createCards(
        loadedCards
    );


}