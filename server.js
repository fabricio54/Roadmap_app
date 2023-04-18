const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://fabricio:fabricio1997@cluster0.xv0badm.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true}, {useUnifiedTopology: true})

//create a data schema
const notesSchema = {
    nome: {
        type: String,
        required: true,
    },
    nomeusuario: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    
    confirmarsenha: {
        type: String,
        required: true,
    }
}



const modeloForms = mongoose.model("modelo", notesSchema);


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

// app post

app.post("/", function(req, res) {
    let form = new modeloForms({
        nome: req.body.nome,
        nomeusuario: req.body.nomeusuario,
        email: req.body.email,
        senha: req.body.senha,
        confirmarsenha: req.body.confirmarsenha
    })
    form.save();
})


app.listen(3000, function() {
    console.log("server is running on 3000 .");
})