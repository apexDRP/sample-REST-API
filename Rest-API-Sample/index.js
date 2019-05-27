const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(require('./routes/api'));

app.listen(3000, err => {
    if(err) {
        console.log(err);
    }
    console.log('app listening on port 3000');
});