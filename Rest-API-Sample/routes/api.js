const express = require('express');
const router = express.Router();
const Song = require('../song');
const songs = [];

router.post('/songs', (req, res) => {
    const song = new Song(Date.now(), req.body.sTitle, req.body.sArtist, req.body.sGenre);
    songs.push(song);
    res.status(200).send(song);
});

router.get('/songs', (req, res) => {
    res.status(200).send(songs);
});

router.put('/songs/:id', (req, res) => {
    const index = songs.findIndex(song => song.id === parseInt(req.params.id));
    if(index > -1) {
        songs[index].title = req.body.sTitle;
        songs[index].artist = req.body.sArtist;
        songs[index].genre = req.body.sGenre;
    }
    res.status(200).send(songs[index]);
});

router.delete('/songs/:id', (req, res) => {
    const index = songs.findIndex(song => song.id === parseInt(req.params.id));
    let song ='';
    if(index > -1) {
        song = songs[index];
        songs.splice(index, 1);
    }
    res.status(200).send(song);
});

module.exports = router;