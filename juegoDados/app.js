const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const axios = require("axios");
const cors = require('cors');

require('dotenv').config({
  path: './environments/development.env'
 });
 
const app = express();

mongoose.connect(process.env.MONGODB_URI).then(()=> {
  console.log('conectado con mongo!');
}).catch(err => {   
  console.log(err);    
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// OBTENER NOMBRES DE USUARIOS  OK FALTA LA APUESTA Y ARROJAR EL GANADOR
app.use('/', require("./routes/index"));
//obtener ganador OK
app.use("/", require("./controllers/get.winner"));

//CREACION DEL JUEGO OK 
app.use('/',require('./controllers/post.game'));

//GET/GAME FOR ID obtener y visualizar todo el game con los usuatios OK
app.use('/',require('./controllers/get.game'));
// OK
app.use('/',require('./controllers/post.startgame'));






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
