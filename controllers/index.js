//const res = require('express/lib/response');
const Customer = require('../models/customer');
const Guest = require('../models/guest');
const Itenary = require('../models/itenary');
const Transaction = require('../models/transaction');
const Meal = require('../models/meal');

async function getAllShipData(req, res){
    
}
async function getAllCustomers(req, res) {
    try {
        const customers = await Customer.find().populate("customer").populate("ship_Itenary").populate("transaction").populate("meal");
        return res.status(200).json({customers})
      } catch (error) {
        return res.status(500).send(error.message);
      }

//       Post.find()
// .populate("postedBy")
// .then(p=>console.log(p))
// .catch(error=>console.log(error));
}
async function getAllItenary(req,res){
    try{
        const itineraries = await Itenary.find();
        res.status(200).json({itineraries});
    }catch (error) {
        return res.status(500).send(error.message);
      }
}

async function getCustomerById(req, res) {
  
}
async function createCustomer(req, res) {
  
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