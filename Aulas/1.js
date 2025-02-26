const express = require("express");
const server = express();

server.get("/", (req, res) => {
    return res.json({ 
        tittle: "Hellow World",
        message: "Olá meu amigo tudo bem!?"
    })
})

server.listen(3000);