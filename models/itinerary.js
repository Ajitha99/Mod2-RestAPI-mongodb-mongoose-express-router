const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Itinerary = new Schema(
    {
        guest: {type: Schema.Types.ObjectId, ref: 'guests', required: true},
        ship: {type: Schema.Types.ObjectId, ref: 'ships', required: true},
        ship_route: {type: String, required: true},
        ship_port: {type: String, required: true},
        ship_startDate: {type: Date, required: true},
        ship_endDate: {type: Date, required: true},
        ship_roomType: {type: String, required: true},
        ship_roomPrice: {type: Number, required: true}
       
    },
    {timestamps : true}
);

module.exports = mongoose.model('itineraries', Itinerary);