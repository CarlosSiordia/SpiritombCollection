const API_URL = "https://api.pokemontcg.io/v2/cards";



async function searchCard(query){


    try{


        const response = await fetch(
            `${API_URL}?q=name:${query}`
        );


        const data = await response.json();


        return data.data;


    }catch(error){


        console.error(
            "Error API:",
            error
        );


        return [];


    }


}