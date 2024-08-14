const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3001;
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));

app.engine(
  'hbs',
  handlebars.engine({ defaultLayout: 'main', extname: '.hbs' }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
