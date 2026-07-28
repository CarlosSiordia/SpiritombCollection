function openModal(id){


console.log("Abriendo carta:", id);



const card = cards.find(
(c)=>c.id === id
);



if(!card){

console.error("Carta no encontrada");

return;

}



document.getElementById("modal")
.style.display="flex";



document.getElementById("modalImage")
.src = card.image;



document.getElementById("modalName")
.textContent = "Spiritomb";



document.getElementById("modalSet")
.textContent = card.set;



document.getElementById("modalNumber")
.textContent = "#" + card.number;



}



function closeModal(){


document.getElementById("modal")
.style.display="none";


}



window.addEventListener(
"DOMContentLoaded",
()=>{


document
.getElementById("closeModal")
.onclick = closeModal;


});