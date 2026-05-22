const arr = [ "apple","ball","cat","dog"];

arr.forEach((data,index,arr)=>{
    console.log(data, index, arr);    
})

const superheroes = [
    {
        name : "ironman",
        src : "Marvel",
    },
    {
        name : "spiderman",
        src : "sony",
    },
    {
        name : "batman",
        src : "Dc"
    }
]
superheroes.forEach(element => {
    console.log(`name : ${element.name} and from ${element.name} ` );
    
});
