const mongoose = require('mongoose');

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cruiseDatabase'

mongoose.connect (MONGODB_URI, {
    useUnifiedTopology : true, useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000,
    family: 4}). then(() => {
    console.log("Successfully connected to MongoDB!")
}).catch(e => {
    console.error('Connection error', e.message)
})

const db = mongoose.connection;

module.exports = db;