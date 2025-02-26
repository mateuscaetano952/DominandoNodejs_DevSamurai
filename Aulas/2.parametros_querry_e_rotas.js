const express = require("express");
const server = express();

//Parametros de Url
// http://localhost:3000/?nome=Felipe&idade=21
// Query params = ?nome=Felipe&idade=21

server.get("/", (req, res) => {
    const {nome, idade} = req.query

    return res.json({ 
        tittle: "Hellow World",
        message: `Olá ${nome} tudo bem`,
        idade: `${idade}`
    })
})

//Parametros de rota
// http://localhost:3000/Hello/Felipe
// Route params = /:nome

server.get("/Hello/:nome", (req, res) => {
    const nome = req.params.nome;

    return res.json({
        title: "Hallo world",
        message: `Olá ${nome} tudo bem!?`
    })
})

server.listen(3000);