// const Profesional = require ("./apii.js");


class Professional 
{
    constructor(name, age, genre, isRetired, nationality, profession)
    {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.profession = profession;
    }
}

function postProfesionales()
{          console.log("hola")
        let profesional = new Professional (
            
                document.getElementById("nombre").value,
                document.getElementById("edad").value,
                document.getElementById("genero").value,
                document.getElementById("retirado").value, 
                document.getElementById("nacionalidad").value,
                document.getElementById("profesion").value
                );

    let url = "http://localhost:4400/profesionales";
    let param =
        {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "POST",
        body: JSON.stringify(profesional)
        }
    
    fetch(url,param)
        .then(function(data)
        {
            return data.json()
        })
        .then (function(result)
        {
            console.log(result)
        })
        .catch(function(error)
        {
            console.log(error)
        })
    
}

function getProfesionales(event)
{   event.preventDefault()

    let id = document.getElementById("id").value;
   
    let url = "http://localhost:4400/profesionales?id=" + id;
    let param =
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    fetch(url,param)
        .then(function(data)
        {
            return data.json()
        })
        .then (function(data)
        {  
            if (Array.isArray(data)){
                
                let arr = [];
                for (let i=0; i<data.length; i++){
                    arr.push("<P> nombre:" + data[i].name +"</P>" +
                        "<P> edad:" + data[i].age +"</P>" +
                        "<P> genero:" + data[i].genre +"</P>" +
                        "<P> nacionalidad:" + data[i].nationality +"</P>" +
                        "<P> retirado:" + data[i].isRetired +"</P>" +
                        "<P> profesion:" + data[i].profession +"</P>")
                }
                document.getElementById("profesional").innerHTML = arr
            }
            else {
                document.getElementById("profesional").innerHTML = 
                "<P> nombre:" + data.name +"</P>" +
                "<P> edad:" + data.age +"</P>" +
                "<P> genero:" + data.genre +"</P>" +
                "<P> nacionalidad:" + data.nationality +"</P>" +
                "<P> retirado:" + data.isRetired +"</P>" +
                "<P> profesion:" + data.profession +"</P>"  
            }
            
        })
      
        .catch(function(error)
        {
            console.log(error)
        })
}

function putProfesionales()
{

    let profesional = new Professional (
        document.getElementById("nombre").value,
        document.getElementById("edad").value,
        document.getElementById("genero").value,
        document.getElementById("retirado").value,
        document.getElementById("nacionalidad").value,
        document.getElementById("oscars").value,
        document.getElementById("profesion").value,
        document.getElementById("id").value )
    
    const url = "http://localhost:4400/profesionales";
    let param =
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "PUT",
        body: JSON.stringify(profesional)
    }
    fetch(url,param)
    .then (function(result)
    {
        return result
    })
    .catch(function(error)
    {
        console.log(error)
    })
}

function deleteProfesionales()
{
    let id = document.getElementById("id").value;

    let url = "http://localhost:4400/profesionales";
    let param =
    {   id:id,
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "DELETE",
    }
    fetch(url,param)
    .then(function(data)
    {
        return data
    })
    .then (function(result)
    {
        console.log(result)
    })
    .catch(function(error)
    {
        console.log(error)
    })
}