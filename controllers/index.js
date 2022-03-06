//const res = require('express/lib/response');
const Ship = require('../models/ship');
const Customer = require('../models/customer');
const Itenary = require('../models/itenary');
const Transaction = require('../models/transaction');
const Meal = require('../models/meal');
const Guest = require('../models/guest');
const _ = require('lodash');



async function getAllShipData(req, res){
    try{
        const ships = await Ship.find();
        return res.status(200).json(ships);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
}
async function getAllCustomers(req, res) {
    try {
        const customers = await Customer.find().populate("customer").populate("ship_Itenary").populate("transaction").populate("meal");
        return res.status(200).json({customers})
      } catch (error) {
        return res.status(500).send(error.message);
      }


}
async function getAllItenary(req,res){
    try{
        const itineraries = await Itenary.find({}).populate("ship").populate("guest");
        res.status(200).json({itineraries});
    }catch (error) {
        return res.status(500).send(error.message);
      }
}

async function getCustomerById(req, res) {
        try {
            const { id } = req.params;
            const customer = await Customer.findById(id).populate("customer").populate("ship_Itenary").populate("transaction").populate("meal");
            if(customer){
                res.status(200).json({customer})
            }
            return res.status(404).send('Customer with the specified ID does not exist');
        } catch (error) {
            return res.status(500).send(error.message);
        }
}

async function createCustomer(req, res) {
    try {
        

        // const object = { a: 5, b: 6, c: 7  };
        // const picked = (({ a, c }) => ({ a, c }))(object);
        let body = _.pick(req.body, ['age','gender','Address', 'passportNo'])
        const customer1 = await new Customer(body);
        // req.body.customer.forEach(function(element){
        //     element.customer = customer1._id;
        //     let guest = new Guest(element);
        //     customer1.customer.push(guest._id);
        //     guest.save().catch((error) => console.log(error));

        // })
            let guest = new Guest(req.body.customer);
            guest.customer = customer1._id;
            customer1.customer = guest._id;
            guest.save().catch((error) => console.log(error));

        // req.body.ship_Itenary.forEach(function(element){
        //     element.customer = customer1._id;
        //     element.guest = guest._id;
        //     element.Ship = "62237795a5d185d16c05b735";
        //     let itenary = new Itenary(element);
        //     customer1.ship_Itenary.push(itenary._id);
        //     itenary.save().catch((error) => console.log(error));
        // })
            let itenary = new Itenary(req.body.ship_Itenary);
            itenary.customer = customer1._id;
            itenary.guest = guest._id;
            customer1.ship_Itenary = itenary._id;
            itenary.save().catch((error) => console.log(error));
        // req.body.transaction.forEach(function(element){
        //     element.customer = customer1._id;
        //     element.guest = guest._id;
        //     let transaction = new Transaction(element);
        //     customer1.transaction.push(transaction._id);
        //     transaction.save().catch((error) => console.log(error));
        // })
            let transaction = new Transaction(req.body.transaction);
            transaction.customer = customer1._id;
            transaction.guest = guest._id;
            customer1.transaction = transaction._id;
            transaction.save().catch((error) => console.log(error));


        // req.body.meal.forEach(function(element){
        //     element.customer = customer1._id;
        //     element.guest = guest._id;
        //     let meal = new Meal(element);
        //     customer1.meal.push(meal._id);
        //     meal.save().catch((error) => console.log(error));
        // })
            let meal = new Meal(req.body.meal);
            meal.customer = customer1._id;
            meal.guest = guest._id;
            customer1.meal = meal._id;
            meal.save().catch((error) => console.log(error));
            
        await customer1.save()
        return res.status(201).json({customer1})
    
      } catch (error) {
        return res.status(500).json({error: error.message})
      }
    
  
}
async function updateCustomer(req, res){
    

}

async function deleteCustomer(req, res) {
  
}



module.exports = {
    createCustomer,
    getAllShipData,
    getAllCustomers,
    getAllItenary,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}