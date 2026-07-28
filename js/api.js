const API_URL = "https://api.pokemontcg.io/v2/cards";


async function searchSpiritomb(){


    try{


        const response = await fetch(
            `${API_URL}?q=name:Spiritomb`
        );


        console.log(
            "Respuesta API:",
            response
        );


        const data = await response.json();



        console.log(
            "Cartas recibidas:",
            data
        );


        return data.data || [];



    }catch(error){


        console.error(
            "Error conectando API:",
            error
        );


        return [];

    }

}