//your code here

const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const PORT = 3000;
const methodOverride = require('method-override');
const piratesController = require('./controllers/pirates');

app.use(methodOverride('_method'));
 app.set('view engine', 'hbs');
 //app.use('/pirates', piratesController);
 app.use(bodyParser.urlencoded({
     extended: true
   }));
app.use('/pirates', piratesController);

app.listen(PORT, () => {
    console.log("express is listening.....")
})