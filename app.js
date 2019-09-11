var express = require('express');
var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
    let data = {
      name: "Ironhacker",
      lastName: "Rocking it!",
      address: {
        street: "Your heart",
        number: 87
      },
      cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
    };
    res.render('index', data);
  });

app.listen(3000);