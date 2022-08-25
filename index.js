const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
let courses = [
    {id: '1588323375416', firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
    {id: '1588323375417', firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113'},
    {id: '1588323375418', firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176'},
  ];
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',routes);
app.set('view engine','pug');

const port = 3000;
const mongoose = require('mongoose');
const monURL = 'mongodb+srv://mongoviope:anhnguyen@atlascluster.9asbi9z.mongodb.net/coursedb?retryWrites=true&w=majority';
mongoose.connect(monURL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error'));
app.listen(port , () => {
    console.log(`Server is running on port ${port}.`);
})
