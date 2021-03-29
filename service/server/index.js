const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
require('dotenv').config()
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


 app.use(express.static(__dirname + '/../public'));

app.use('', routes);
 
//for the proxy
app.use('/app.js', express.static(__dirname + '/../public/bundle.js'));

 app.listen(process.env.PORT, () => {
    console.log(`listening on port 3003`);
  });