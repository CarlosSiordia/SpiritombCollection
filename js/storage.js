function getCollection(){

return JSON.parse(
localStorage.getItem(
"spiritombCollection"
)
)||[];

}



function saveCollection(data){

localStorage.setItem(
"spiritombCollection",
JSON.stringify(data)
);

}