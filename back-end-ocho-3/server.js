// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


// CONFIGURATION
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

  

// LISTEN
app.listen(PORT, () => {
    console.log("OCHO-MANIA Server Running on:", PORT)
  })