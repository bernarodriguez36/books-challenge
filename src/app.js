const express = require('express');
const mainRouter = require('./routes/main');
const cookies = require('cookie-parser');
const app = express();
const session = require('express-session'); // Instalando express-session

const logMiddleware = require('./middlewares/logMiddleware');

app.use(session({secret:'Secreto', resave: false, saveUninitialized: true,})); //Utilizando middleware a nivel global de express-session

app.use(cookies());

app.use(logMiddleware);

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', 'src/views');

app.use('/', mainRouter);

app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});
