const API_URL = "https://api.pokemontcg.io/v2/cards";


async function searchSpiritomb(){


    const debug = document.createElement("div");

    debug.id="debug";

    debug.style.position="fixed";

    debug.style.bottom="10px";

    debug.style.left="10px";

    debug.style.right="10px";

    debug.style.padding="15px";

    debug.style.background="#222";

    debug.style.color="white";

    debug.style.zIndex="9999";

    document.body.appendChild(debug);



    try{


        debug.innerHTML =
        "Conectando con API...";



        const response = await fetch(
            `${API_URL}?q=name:Spiritomb`
        );


        debug.innerHTML +=
        "<br>Respuesta: "+response.status;



        const data =
        await response.json();



        debug.innerHTML +=
        "<br>Cartas encontradas: "
        + data.data.length;



        return data.data;



    }catch(error){


        debug.innerHTML =
        "ERROR: "
        + error.message;


        return [];

    }


}