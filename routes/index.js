
const { Router } = require('express');

const controllers = require('../controllers')
// const _ = require('lodash');

const router = Router();
//root -
router.get('/', (req, res) => res.send("Welcome to AJ Cruise Lines!"));

//gets all customer data
router.get('/customers', controllers.getAllCustomers);

//gets all customer itinerary
router.get('/itinerary', controllers.getAllItinerary);

//gets all guest data
router.get('/guest', controllers.getAllGuest);

//gets all ship data
router.get('/ships', controllers.getAllShipData);

//gets customer data by id
router.get('/customers/:id', controllers.getCustomerById);

//gets the itinerary by id
router.get('/itinerary/:id', controllers.getItineraryById);

//gets the guest data by id
router.get('/guest/:id', controllers.getGuestById);

//creates new customers
router.post('/customers', controllers.createCustomer);

//update customer
router.put('/customers/:id', controllers.updateCustomer);

//update guest details
router.put('/guest/:id', controllers.updateGuest);

//update guest details
router.put('/itinerary/:id', controllers.updateItinerary);

//delete customer
router.delete('/customers/:id', controllers.deleteCustomer);

module.exports = router;