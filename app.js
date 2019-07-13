const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config');
const setupController = require("./api/controllers/setupController");
const todoController = require("./api/controllers/todoController") ;

const app = express();
const port = process.env.PORT || 3000;

// cung cấp tài nguyên tĩnh
app.use('/assets', express.static(__dirname + '/public'));

// đọc dữ liệu
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// log mọi request ra console
app.use(morgan('dev'));

// views
app.set('view engine', 'ejs');

// db info
// console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });

setupController(app);
todoController(app);

app.get('/', (req, res) => {
    res.render('index');
})
app.listen(port, () => console.log(`Port ${port}`))