function saveApiCards(cards){

    localStorage.setItem(
        "spiritombCards",
        JSON.stringify(cards)
    );

}



function getApiCards(){

    const data =
    localStorage.getItem(
        "spiritombCards"
    );


    return data ?
    JSON.parse(data)
    :
    null;

}