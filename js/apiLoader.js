async function loadApiCards(){


    const apiCards = await getSpiritombCards();



    console.log(apiCards);



    const cardsFromAPI = apiCards.map(
        (card,index)=>{


            return {

                id:index+1,

                pokemon:card.name,

                set:card.set.name,

                number:card.number,

                year:card.set.releaseDate,

                rarity:card.rarity || "Unknown",

                image:card.images.large

            };


        }
    );



    createCards(cardsFromAPI);


}