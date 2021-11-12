function getPokemon()
{
    let Pokemon = document.getElementById("Buscar").value
   
    let url=  "https://pokeapi.co/api/v2/pokemon/"+ Pokemon;
    console.log(Pokemon)
    
    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        method:"GET"
    }

    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(res)
    {
       document.getElementById("habilidades").innerHTML = res.abilities[0].ability.name;
       document.getElementById("imagen").setAttribute("src",res.sprites.back_default);
    })
    .catch (function(err){
        console.log(err)
    })
}