const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

// NONGOOSE
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }, err => {
    if (err) { throw new Error(err) }
    console.info('💾 Connected to Mongo Database')
    console.info('.')
  })

// ADDING MIDDLEWARES & ROUTER
const app = express()
  .use(cors())
  .use(morgan('combined'))
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  .use('/api', require('./routes'))

// Init server
const PORT = process.env.PORT || 2222;
app.listen(PORT, (err) => {
  if (err) { throw new Error(err) }
  console.info('>'.repeat(40))
  console.info('💻  Reboot Server Live')
  console.info(`📡  PORT: http://localhost:${PORT}`)
  console.info('>'.repeat(40))
  console.info('.')
})
