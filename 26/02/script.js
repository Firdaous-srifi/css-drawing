fetch("data.json").then(response=>response.json()).then(data=>{
 fetching(data);
})

function fetching(data){
    console.log(data);

}