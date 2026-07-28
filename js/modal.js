function openModal(card){


document.getElementById(
"modal"
).style.display="flex";



document.getElementById(
"modalImage"
).src = card.image;



document.getElementById(
"modalName"
).innerHTML =
card.pokemon;



document.getElementById(
"modalSet"
).innerHTML =
card.set;



document.getElementById(
"modalNumber"
).innerHTML =
"#"+card.number;



}



function closeModal(){


document.getElementById(
"modal"
).style.display="none";


}



document
.getElementById("closeModal")
.onclick =
closeModal;