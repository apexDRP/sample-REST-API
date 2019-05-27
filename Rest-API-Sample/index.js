const express = require('express');
const bodyParser = require('body-parser');

//set up express app
const app = express();

//define body form to JSON
app.use(bodyParser.json());

//initialize routes
app.use(require('./routes/api'));

//listen for requests
app.listen(3000, err => {
    if(err) {
        console.log(err);
    }
    console.log('app listening on port 3000');
});
