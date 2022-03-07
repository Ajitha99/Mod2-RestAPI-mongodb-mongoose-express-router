const express = require('express');

const routes = require('./routes');

const db = require('./db');

const logger = require('morgan');//debugging tool

const cors = require('cors')

const PORT = process.env.PORT || 3000;


const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5501",
}))


//They are parsing our data that we send out
app.use(express.json());
app.use(express.urlencoded({extended: false}));//parses express


app.use(logger('dev'));

app.use('/api' , routes);

db.on('error', console.error.bind(console,'MongoDB Connection error: '));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));