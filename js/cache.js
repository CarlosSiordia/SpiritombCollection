function saveApiCards(cards){


localStorage.setItem(
"spiritombCards",
JSON.stringify(cards)
);


}




function getApiCards(){


try{


const data =
localStorage.getItem(
"spiritombCards"
);



if(!data){

return null;

}



return JSON.parse(data);



}catch(error){


console.error(
"Error leyendo caché",
error
);


localStorage.removeItem(
"spiritombCards"
);


return null;


}


}