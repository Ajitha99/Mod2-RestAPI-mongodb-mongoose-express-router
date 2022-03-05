const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Itenary = require('./itenary');
// const Transaction = require('./transaction');
// const Meal = require('./meal');
//const itenary = new Itenary();

const Address = new Schema(
    {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        zip: {type: Number, required: true},
        country: {type: String, required: true}
    }
);

const Customer = new Schema(
    {
        customer: {type: Schema.Types.ObjectId, ref: 'guests' , required: true},
        //name: {type: String, required: true},
        age: {type: String, required: true},
        gender: {type: String, required: true},
        Address: Address,
        // email: {type: String, required: true},
        passportNo: {type: String, required: true},
        ship_Itenary: {type: Schema.Types.ObjectId, ref: 'itineraries', required: true},
        transaction: {type: Schema.Types.ObjectId, ref: 'transactions', required: true},
        meal: {type: Schema.Types.ObjectId, ref: 'meals', required: true},
    },
    {timestamps : true}
);

module.exports = mongoose.model('customers', Customer);




// ship_Itenary: Itenary.schema,//This worked, validating when I entered customer data ...Yey
// ship_Itenary: itenary, //---> giving invalid schema configuration-- 
// transaction: Transaction.schema, //worked
// meal: Meal.schema, //worked