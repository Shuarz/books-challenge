const express = require('express');
const mainRouter = require('./routes/main');

const path = require('path');
const methodOverride =  require('method-override');
const cookies = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(session({
	secret: "Secret secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(express.static('public'));

app.use(cookies());
//app.use(userLoggedMiddleware);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', mainRouter);

app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});
