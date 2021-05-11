const express = require('express');//
//instantiate the server
const PORT = process.env.PORT || 3001;//
const app = express();//
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// const { query } = require('express');
// const fs = require('fs');
// const path = require('path');

// const { animals } = require('./data/animals');

//MIDDLEWARE!!!
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//add static to include css and js files within PUBLIC folder along with html!
// app.use(express.static('public'));

// console.log(body);
//our function's main code will go here!

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});