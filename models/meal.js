const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Meal = new Schema(
    {   
        guest: {type: Schema.Types.ObjectId, ref: 'guests', required: true},
        meal_preference: {type: String, required: true},
        // meal_catelogue: {type: String, required: true},
        food_allergies: {type: String, required: true}
    },
    {timestamps: true}
);

module.exports = mongoose.model('meals', Meal);