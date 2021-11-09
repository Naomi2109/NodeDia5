const express = require ("express");
const cors = require ("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use (express.json());

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

let profesional1 = new Professional("Carla", 25, "Mujer", false, "Española", "Programadora");
let profesional2 = new Professional ("Oscar", 38, "Hombre", false, "Alemán", "Actor");
let profesionales = [profesional1, profesional2]

app.get ("/profesionales", function (req,res)
{
    let respuesta;
    let id = req.query.id;

        if ((id==null) && (profesionales.length != 0))
            respuesta = profesionales;
        else if ((id!=null) && (profesionales.length != 0))
            respuesta = profesionales[id]
        else respuesta = {error:true, codigo:200, message: "El profesional no existe"}
    
        res.send(respuesta);
})
app.post("/profesionales", function (req, res)
{
    let respuesta; 
    let profesional = new Professional (req.body.name, 
                                        req.body.age, 
                                        req.body.genre, 
                                        req.body.isRetired,
                                        req.body.nationality, 
                                        req.body.profession);
    
    profesionales.push(profesional);
    respuesta = {error:false, codigo:200, message: "El profesional se ha añadido", resultado:profesional}
    
    res.send(respuesta);
})

app.put("/profesionales", function (req, res)
{
    let respuesta;
    let id = req.body.id;
    if ((id!=null) && (profesionales.length != 0))
    {   profesionales[id].name = req.body.name
        profesionales[id].age = req.body.age
        profesionales[id].genre = req.body.genre
        profesionales[id].isRetired = req.body.isRetired
        profesionales[id].nationality = req.body.nationality
        profesionales[id].profession = req.body.profession
        
        respuesta = {error:false, codigo:200, message: "El profesional se ha modificado"}
    }
    else respuesta = {error:true, codigo:200, message: "El profesional no existe"}

    res.send(respuesta)
    
})

app.delete("/profesionales", function (req, res)
{
    let respuesta;
    let id = req.body.id;
    if ((id!=null) && (profesionales.length != 0))
        {profesionales = profesionales.splice(id, 1);
        respuesta = {error: false, codigo: 200, message: "El profesional se ha borrado"}}
    else respuesta = {error: true, codigo: 200, message: "El profesional no existe"}
  
    res.send(respuesta);

})
app.listen(4400);

// export { Professional }


