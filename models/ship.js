const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ship = new Schema(
    {
        ship_name: {type: String, required: true},
        ship_capacity: {type: Number, required: true},
        ship_crew: {type: String, required: true}
    },
    {timestamps: true}
);

module.exports = mongoose.model('ships', Ship);