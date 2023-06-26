const express = require('express');
const performances = express.Router();
const Performance = require('../models/performance')

module.exports = performances

performances.get('/seed' , (req, res) => {
 Performance.insertMany(
        [
            {
                venue: "taj",
                date: "June 3, 2023",
                image: "https://imgbox.com/yv9V6Qqq",
                bestSong: "Talibans",
                songArtist: "Byron Messia"
        
        
            },
            {
                venue: "panda",
                date: "May 28, 2023",
                image: "https://imgbox.com/IlQizuWR",
                bestSong: "I just wanna rock",
                songArtist: "Lil Uzi Vert"
        
            },
            {
                venue: "333 lounge",
                date: "April 20, 2023",
                image: "https://imgbox.com/0ZxKZcCD",
                bestSong: "Hypnotize",
                songArtist: "The Notorious B.I.G"
        
            },
        
        ]
    )
    .then(createdPerformances => {
        res.json({
            message: "seed successful"
        })
    })

})


// Index:
performances.get('/', (req, res) => {
    Performance.find()
        .then(foundPerformances => {
            res.json(foundPerformances)
        })
})

// CREATE
// performances.post('/')

