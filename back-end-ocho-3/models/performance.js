const mongoose = require('mongoose');
const { Schema } = mongoose
 
// SCHEMA
const performanceSchema = new Schema({
    venue: { type: String, required: true },
    date: Date,
    image: String,
    bestSong: String,
    songArtist: String
})

const Performance = mongoose.model('Performance', performanceSchema)
module.exports = Performance