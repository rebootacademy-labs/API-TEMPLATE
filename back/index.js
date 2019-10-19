process.stdout.write("\u001b[2J\u001b[0;0H"); // Clear Screen Magic

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();

// CONFIG AND ENVIRONMENT LOADING FROM .env FILE
let config = require('./.env');
const environment = process.env.NODE_ENV;
config = config[environment];
if (!config) return console.error(`❌ ERROR | Invalid ${environment} environment`);

// MIDDLEWARES
app.use(cors());                                // Using Cross-Origin-Request-Service
app.use(morgan('combined'));                    // Using Morgan Logger
app.use(express.json());                        // Using JSON Body-parser
app.use(express.urlencoded( {extended: false})) // Using URL Body-Parser

// app.use((req, res, next) => { // Creating your custom middleware
//   console.log("🍺 My Custom middleware");
//   next()
// })

// NONGOOSE
mongoose
  .connect(config.mongoURL + config.mongoDBName, { useNewUrlParser: true })
  .then(() => console.info("🗄️  MongoDB Connected"))
  .catch(err => console.log(err));;

// ROUTING
const apiRouter = require('./routes');
app.use('/api', apiRouter);

// Init server
app.listen(config.port, (err) => {
  console.info('.\n\n\n' + '*'.repeat(60))
  console.info(`💻  Reboot Backend Server Live`);
  console.info(`📡  PORT: http://localhost:${config.port}`);
  console.info("*".repeat(60) + "\n\n\n.");
})
