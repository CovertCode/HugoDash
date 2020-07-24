const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const multer = require('multer');

const upload = multer();
const app = express();

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs');

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(upload.array()); 
app.use(express.static('cdn'));

module.exports = {
    app
}
