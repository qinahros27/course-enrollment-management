const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const methodOverride = require('method-override');
  
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',routes);
app.set('view engine','pug');
app.set('port', process.env.PORT || 3000);
const port = 3000;
const mongoose = require('mongoose');
const monURL = 'mongodb+srv://mongoviope:anhnguyen@atlascluster.9asbi9z.mongodb.net/coursedb?retryWrites=true&w=majority';
mongoose.connect(monURL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error'));
app.listen(port , () => {
    console.log(`Server is running on port ${port}.`);
})



