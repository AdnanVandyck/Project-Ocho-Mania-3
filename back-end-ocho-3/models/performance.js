const mongoose = require('mongoose');
const { Schema } = mongoose
 
const performanceSchema = new mongoose.Schema({
    venue: { type: String, required: true },
    date: Date,
    image: String,
    bestSong: String,
    songArtist: String
})

const Performance = mongoose.model('Performances', performanceSchema)
module.exports = Performance