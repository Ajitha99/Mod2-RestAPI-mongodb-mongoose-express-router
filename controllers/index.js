//const res = require('express/lib/response');
const Ship = require('../models/ship');
const Customer = require('../models/customer');
const Itinerary = require('../models/itinerary');
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
        const customers = await Customer.find().populate("customer").populate("ship_Itinerary").populate("transaction").populate("meal");
        return res.status(200).json({customers})
      } catch (error) {
        return res.status(500).send(error.message);
      }


}
async function getAllItinerary(req,res){
    try{
        const itineraries = await Itinerary.find({}).populate("ship").populate("guest");
        res.status(200).json({itineraries});
    }catch (error) {
        return res.status(500).send(error.message);
      }
}

async function getAllGuest(req,res){
  try{
    const guests = await Guest.find({});
    res.status(200).json({guests});
  }catch(error){
    return res.status(500).send(error.message);
  }
}

async function getCustomerById(req, res) {
        try {
            const { id } = req.params;
            const customer = await Customer.findById(id).populate("customer").populate("ship_Itinerary").populate("transaction").populate("meal");
            if(customer){
                res.status(200).json({customer})
            }
            return res.status(404).send('Customer with the specified ID does not exist');
        } catch (error) {
            return res.status(500).send(error.message);
        }
}
async function getItineraryById(req, res) {
  try {
      const { id } = req.params;
      const itinerary = await Itinerary.findById(id).populate("guest").populate("ship");
      if(itinerary){
          res.status(200).json({itinerary})
      }
      return res.status(404).send('Itinerary with the specified ID does not exist');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}
async function getGuestById(req, res) {
  try {
      const { id } = req.params;
      const guest = await Guest.findById(id);
      if(guest){
          res.status(200).json({guest})
      }
      return res.status(404).send('Guest with the specified ID does not exist');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

async function createCustomer(req, res) {
    try {
        //selecting age, gender, address, passportNo - created new customer - _id will be generated
        let body = _.pick(req.body, ['age','gender','Address', 'passportNo'])
        const customer1 = await new Customer(body);
        
        //first creating guest by getting customer:-- data from request.body data
            let guest = new Guest(req.body.customer);
            guest.customer = customer1._id; //assigning customer unique id to guest
            customer1.customer = guest._id; //assigning guest unique id to customer
            guest.save().catch((error) => console.log(error)); //saving guest data to db


        //creating Itinerary by getting ship_Itinerary fields data from request.body data
            let itinerary = new Itinerary(req.body.ship_Itinerary);
            itinerary.customer = customer1._id; // assigning customer _id to itinerary
            itinerary.guest = guest._id; //assigning guest _id to itinerary guest field
            customer1.ship_Itinerary = itinerary._id; //assigning itinerary id to customer
            itinerary.save().catch((error) => console.log(error)); //saving Itinerary data to db
        
        //creating Transaction by getting transaction fields from request.body data --for customer
            let transaction = new Transaction(req.body.transaction);
            transaction.customer = customer1._id;
            transaction.guest = guest._id;
            customer1.transaction = transaction._id;
            transaction.save().catch((error) => console.log(error));//saving transaction data to db -updates in transaction collection as well
        //creating meal
            let meal = new Meal(req.body.meal);
            meal.customer = customer1._id;
            meal.guest = guest._id;
            customer1.meal = meal._id;
            meal.save().catch((error) => console.log(error));
        //saving customer to db 
        await customer1.save()
        return res.status(201).json({customer1})//result in postman body if the insertion is a success.
    
      } catch (error) {
        return res.status(500).json({error: error.message})
      }
    
  
}
async function updateCustomer(req, res){
    
    try {
          const { id } = req.params
          Customer.findByIdAndUpdate(id, req.body, { new: true }, (err, customer) => {
           
            if (err !== null) {
              console.log(err, 'error')
              res.status(404).send(err.message)
            } else {
              console.log(customer)
              res.json(customer)
            }
          })
        } catch (error) {
         return  res.status(500).send(error.message)
        }
   

}

async function updateGuest(req, res){ 
  try {
        const { id } = req.params
        Guest.findByIdAndUpdate(id, req.body, { new: true }, (err, guest) => {
         
          if (err !== null) {
            console.log(err, 'error')
            res.status(404).send(err.message)
          } else {
            console.log(guest)
            res.json(guest)
          }
        })
      } catch (error) {
       return  res.status(500).send(error.message)
      }
}

async function deleteCustomer(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Customer.findByIdAndDelete(id)
        if (deleted) {
          return res.status(200).send("Customer Deleted");
        }
        throw new Error("Customer not found");
      } catch (error) {
        return res.status(500).send(error.message);
      }
}



module.exports = {
    createCustomer,
    getAllShipData,
    getAllCustomers,
    getAllItinerary,
    getAllGuest,
    getCustomerById,
    getItineraryById,
    getGuestById,
    updateCustomer,
    updateGuest,
    deleteCustomer
}