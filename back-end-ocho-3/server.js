// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Performance = require('./models/performance')


// CONFIGURATION
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Events 
const performancesController = require('./controllers/performances_controller.js')
app.use('/performances', performancesController)


// GET 
app.get('/performances', async(req, res) => {
await Performance.find({}, (err, result) => {
    if (err) {
res.json(err)
    } else {
        res.json(result)
    }
})
})

//CREATE
app.post('/createPerformance', async(req, res) => {
    const performance = req.body
    const newPerformance = new Performance(performance);
    await newPerformance.save();

    res.json(performance)
})



// LISTEN
app.listen(PORT, () => {
    console.log("OCHO-MANIA Server Running on:", PORT)
  })