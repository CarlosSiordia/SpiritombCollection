let loadedCards = [];



async function loadApiCards(){


    const results =
    await searchSpiritomb();



    console.log(
        "Resultados Spiritomb:",
        results
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
                card.rarity || "Normal",


                year:
                card.set.releaseDate,


                image:
                card.images.large


            };


        });



    console.log(
        "Cartas procesadas:",
        loadedCards
    );



    createCards(
        loadedCards
    );


}