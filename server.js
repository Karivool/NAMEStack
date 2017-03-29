let express = require('express');
let mongojs = require('mongojs');
let app = express();
let db = mongojs('namestack', ['namestack']);

app.use(express.static(__dirname + "/public"));

app.get('/cardinfo', function (req, res) {
  console.log("GET request made.");

  db.namestack.find(function (err, docs) {
    console.log(docs);

    res.json(docs);
  });
});

let port = 3000;

app.listen(port);
console.log("Running on " + port.toString());
