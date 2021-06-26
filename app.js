var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser")
const fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/userRoutes');
var productRouter = require('./routes/productRoutes');


var app = express();

// set up sequelize connection



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(fileUpload());


//lo de aca abajo son pre-requisitos de los routers

const session = require('express-session');

app.use(session( {
  secret: "Mensaje Secreto",
  resave: false,
  saveUninitialized: true
}));

//lo de cookie tiene que ir despues de lo de session porque vamos a usar la session

const db = require('./database/models');

app.use(function(req, res, next) {
  if(req.cookies.userId && !req.session.username) {
    db.User.findByPk(req.cookies.userId).then(resultado => {
      req.session.username = resultado.username;
      req.session.name = resultado.first_name;
      req.session.userid = resultado.id;
      return next();
    });
  } else {
  	return next();
  }}
);

//locals es una variable disponible en todas las vistas - va despues de la cookie porque la usa
app.use(function (req, res, next) {
  if(req.session.username){
    res.locals = {
      title: '2NITE',
      logueado: true,
      name: req.session.name,
      username: req.session.username,
      userid: req.session.userid,
      cookie: req.cookies.userId
    }
  } else {
    res.locals = {
      title: '2NITE',
      logueado: false,
      name: 'anonimo',
      username: 'anonimo'
    }
  }
  return next();
})


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

// console.log(err);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;