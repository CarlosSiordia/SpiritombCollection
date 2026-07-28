function getCollection(){

let data = localStorage.getItem(
"spiritombCollection"
);


return data ? JSON.parse(data) : [];

}



function saveCollection(collection){


localStorage.setItem(

"spiritombCollection",

JSON.stringify(collection)

);


}