function getCollection(){


    const saved =
    localStorage.getItem(
        "spiritombCollection"
    );


    return saved ?
    JSON.parse(saved)
    :
    [];


}



function saveCollection(collection){


    localStorage.setItem(

        "spiritombCollection",

        JSON.stringify(collection)

    );


}