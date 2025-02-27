let customers = [
    { id:1, name: "DevSamurai", site: "http://devsamurai.com.br"},
    { id:2, name: "Google", site: "http://google.com.br"},
    { id:3, name: "Uol", site: "http://Uol.com.br"},
]

class Costumers {
    
    index(req, res){
        return res.json(customers);
    }

    show(req, res){
        const id = parseInt(req.params.id);

        const customer = customers.find(item => item.id === id);
        const status = customer ? 200: 400;

        //Força status com .status()
        return res.status(status).json(customer);
    }

    create(req, res){
        console.log("PUT :: /customers/:id", req.body);
        const {name, site} = req.body;
        const nextId = customers[customers.length - 1].id + 1;
        const newCostumer = {nextId, name, site};
        customers.push(newCostumer);
    
        return res.status(201).json(newCostumer);
    }

    update(req, res){
        const {name, site} = req.body;
        const id = parseInt(req.params.id);
    
        const index = customers.findIndex(item => item.id === id)
        const status = index >= 0 ? 200 : 404;
    
        if(index >= 0){
            customers[index] = {id, name, site}
        }
    
        return res.status(status).json(customers);
    }

    destroy(req, res){
        const {name, site} = req.body;
        const id = parseInt(req.params.id);
    
        const index = customers.findIndex(item => item.id === id)
        const status = index >= 0 ? 200 : 404;
    
        if(index >= 0){
            customers.splice(index, 1);
        }
    
        return res.status(status).json(customers);
    }
}

export default Costumers;