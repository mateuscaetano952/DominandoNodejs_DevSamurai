const express = require("express");
const server = express();

server.use(express.json());

/**
 * Simular um crud básico utilizando um array como base de dados
 */

let customers = [
    { id:1, name: "DevSamurai", site: "http://devsamurai.com.br"},
    { id:2, name: "Google", site: "http://google.com.br"},
    { id:3, name: "Uol", site: "http://Uol.com.br"},
]

//Lista todos os contatos
server.get('/customers', (req, res) => {
    return res.json(customers);
})

//Seleciona um contato em especifico pelo id
server.get('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const customer = customers.find(item => item.id === id);
    const status = customer ? 200: 400;

    //Força status com .status()
    return res.status(status).json(customer);
})

//Adiciona contato
server.post('/customers', (req, res) => {
    //req.body <- Onde ficam o "corpo" da requisição -> As informações que o cliente enviar pelo POST.
    const {name, site} = req.body;
    const nextId = customers[customers.length - 1].id + 1;
    const newCostumer = {nextId, name, site};
    customers.push(newCostumer);

    return res.status(201).json(newCostumer);
})

//Edição de contato
server.put('/customers/:id', (req, res) => {
    const {name, site} = req.body;
    const id = parseInt(req.params.id);

    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers[index] = {id, name, site}
    }

    return res.status(status).json(customers);
     
})

//Delete costumers
server.delete('/customers/:id', (req, res) => {
    const {name, site} = req.body;
    const id = parseInt(req.params.id);

    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers.splice(index, 1);
    }

    return res.status(status).json(customers);
})

server.listen(3000);