
const { Router } = require('express');

const controllers = require('../controllers')
// const _ = require('lodash');

const router = Router();

router.get('/', (req, res) => res.send("Welcome to AJ Cruise Lines!"));
//gets all customer data
router.get('/customers', controllers.getAllCustomers);
//gets all customer itinerary
router.get('/itinerary', controllers.getAllItinerary);

router.get('/ships', controllers.getAllShipData);

router.get('/customers/:id', controllers.getCustomerById);

router.post('/customers', controllers.createCustomer);

router.put('/customers/:id', controllers.updateCustomer);

router.delete('/customers/:id', controllers.deleteCustomer);

module.exports = router;