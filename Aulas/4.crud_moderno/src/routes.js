import { Router } from 'express'
import Customers from './app/CustomersController';

const customers = new Customers;
const router = new Router();

//Rotas customers
router.get('/customers', customers.index);
router.get('/customers/:id', customers.show);
router.post('/customers', customers.create);
router.put('/customers/:id', customers.update);
router.delete('/customers/:id', customers.destroy);

export default router;