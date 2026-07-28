function getCollection(){


const saved = localStorage.getItem(
"spiritombCollection"
);



return saved ? JSON.parse(saved) : [];


}




function saveCollection(data){


localStorage.setItem(

"spiritombCollection",

JSON.stringify(data)

);


}