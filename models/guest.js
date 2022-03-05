const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Guest = new Schema(
    {   
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        email_id: {type: String, required: true}
    },
    {timestamps: true}
);

module.exports = mongoose.model('guests', Guest);