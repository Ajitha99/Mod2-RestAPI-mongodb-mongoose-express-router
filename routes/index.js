
const { Router } = require('express');

const controllers = require('../controllers')
// const _ = require('lodash');

const router = Router();

router.get('/', (req, res) => res.send("This is the route!"));

router.get('/customers', controllers.getAllCustomers);
router.get('/itenary', controllers.getAllItenary);
router.get('/ships', controllers.getAllShipData);
router.get('/customers/:id', controllers.getCustomerById);

router.post('/customers', controllers.createCustomer);


// router.post('/plants', controllers.createPlant);

// router.get('/plants', controllers.getAllPlants);//since plants name - used in post.. we can also use in get

// router.get('/plants/:id', controllers.getPlantById);

// router.put('/plants/:id', controllers.updatePlant);

// router.delete('/plants/:id', controllers.deletePlant);

module.exports = router;