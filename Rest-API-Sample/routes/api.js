const express = require('express');
const router = express.Router();
const Song = require('../song');
const songs = [];

//add a new song to songs array
router.post('/songs', (req, res) => {
    const song = new Song(Date.now(), req.body.sTitle, req.body.sArtist, req.body.sGenre);
    songs.push(song);
    res.status(200).send(song);
});

//retrieve all songs from songs array
router.get('/songs', (req, res) => {
    res.status(200).send(songs);
});

//update the song that matches given id
router.put('/songs/:id', (req, res) => {
    const index = songs.findIndex(song => song.id === parseInt(req.params.id));
    if(index > -1) {
        songs[index].title = req.body.sTitle;
        songs[index].artist = req.body.sArtist;
        songs[index].genre = req.body.sGenre;
    }
    res.status(200).send(songs[index]);
});

//delete the song that matches given id
router.delete('/songs/:id', (req, res) => {
    const index = songs.findIndex(song => song.id === parseInt(req.params.id));
    let song ='';
    if(index > -1) {
        song = songs[index];
        songs.splice(index, 1);
    }
    res.status(200).send(song);
});
//export the router to use in index.js
module.exports = router;
