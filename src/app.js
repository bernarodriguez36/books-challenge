const express = require('express');
const mainRouter = require('./routes/main');

const app = express();
const session = require('express-session'); // Instalando express-session

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({secret:'Secreto', resave: false, saveUninitialized: true,})); //Utilizando middleware a nivel global de express-session
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/', mainRouter);

app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});
