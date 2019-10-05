const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

let config = require('./.env');

// TODO : ¿Dará tiempo de ver environment? Preguntar a FER
const environment = process.env.NODE_ENV;
config = config[environment];
if (!config)
    return console.error(`Invalid ${environment} environment`);
    
// Connect mongoose with the DB
const mongoose = require('mongoose');
mongoose.connect(config.mongoDBURI + config.mongoDBDataBaseName);

// Creating a custom middleware
app.use ( (req, rex, next) =>{
    console.log("Custom middleware");
    next()
})

// Using cors middleware
app.use(cors());

// Using morgan middleware
app.use(morgan('combined'));

// Using JSON Body parser middleware
app.use(express.json());

// Routing 
const apiRouter = require('./routes');
app.use('/api', apiRouter);

// Init server
app.listen(config.port, (err) => {
    console.log('Servidor listo en el puerto ' + config.port);
})