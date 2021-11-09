import {Professional} from "./apii.js";



function postProfesionales()
{
        let profesional = new Professional (
            
                document.getElementById("Nombre").value,
                document.getElementById("Edad").value,
                document.getElementById("Genero").value,
                document.getElementById("Retirado").value, 
                document.getElementById("Nacionalidad").value,
                document.getElementById("Profesion").value
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

function getProfesionales()
{
        
    let url = "http://localhost:4400/profesionales";
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
    .then (function(result)
    {
        document.getElementById("Nombre").value = result.profesionales[id].name
        document.getElementById("Edad").value = result.profesionales[id].age
        document.getElementById("Genero").value = result.profesionales[id].genre
        document.getElementById("Retirado").value = result.profesionales[id].isRetired
        document.getElementById("Nacionalidad").value = result.profesionales[id].nationality
        document.getElementById("Profesion").value = result.profesionales[id].profession

    })
    .catch(function(error)
    {
        console.log(error)
    })
}

function putProfesionales()
{
    let id = document.getElementById("id").value;
    let url = "http://localhost:4400/profesionales";
    let param =
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "PUT",
        body: JSON.stringify(profesionales[id])
    }
    fetch(url,param)
    .then(function(data)
    {
        return data.json()
    })
    .then (function(result)
    {
        document.getElementById("MostrarN").value = result.profesionales[id].name
        document.getElementById("MostrarA").value = result.profesionales[id].age
        document.getElementById("MostrarG").value = result.profesionales[id].genre
        document.getElementById("MostrariR").value = result.profesionales[id].isRetired
        document.getElementById("MostrarN").value = result.profesionales[id].nationality
        document.getElementById("MostrarP").value = result.profesionales[id].profession

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
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "DELETE",
        body: JSON.stringify(profesionales[id])
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