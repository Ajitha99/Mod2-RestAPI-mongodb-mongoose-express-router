const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Transaction = new Schema(
    {
        guest: {type: Schema.Types.ObjectId, ref: 'guests', required: true},
        account_id: {type: String, unique: true, required: true},
        payment_type: {type: String, required: true},
        card_number: {type: Number, unique: true, required: true},
        paid_Amount: {type: Number, required: true},                         
        payment_date: {type: Date, default: Date.now, required: true}
    },
    {timestamps : true}
);

module.exports = mongoose.model('transactions', Transaction);