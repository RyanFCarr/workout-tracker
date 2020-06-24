const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

app.listen(process.env.PORT || 3000, () => {
  console.log('App running on port 3000!');
});
