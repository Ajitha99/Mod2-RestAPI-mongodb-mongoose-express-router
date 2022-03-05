const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Transaction = new Schema(
    {
        guest: {type: Schema.Types.ObjectId, ref: 'guests', required: true},
        account_id: {type: String, required: true},
        payment_type: {type: String, required: true},
        card_number: {type: Number, required: true},
        paid_Amount: {type: Number, required: true},                         
        payment_date: {type: Date, required: true}
    },
    {timestamps : true}
);

module.exports = mongoose.model('transactions', Transaction);