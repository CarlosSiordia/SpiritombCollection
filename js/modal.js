function openModal(id){


    const card = window.cards.find(
        card => card.id === id
    );


    console.log("Carta seleccionada:", card);



    if(!card){

        console.error("No existe la carta");

        return;

    }



    document.getElementById("modal")
    .style.display = "flex";



    document.getElementById("modalImage")
    .src = card.image;



    document.getElementById("modalName")
    .textContent = card.pokemon;



    document.getElementById("modalSet")
    .textContent = card.set;



    document.getElementById("modalNumber")
    .textContent = "#" + card.number;



}




function closeModal(){


    document.getElementById("modal")
    .style.display = "none";


}



window.addEventListener("DOMContentLoaded",()=>{


    document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


});