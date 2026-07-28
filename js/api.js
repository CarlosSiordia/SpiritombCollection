const API_URL = "https://api.pokemontcg.io/v2/cards?q=name:Spiritomb";


async function getSpiritombCards(){

    try{

        const response = await fetch(API_URL);

        const data = await response.json();

        return data.data;


    }catch(error){

        console.log(error);

        return [];

    }

}