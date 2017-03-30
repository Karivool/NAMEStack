let express = require('express');
let mongojs = require('mongojs');
let app = express();
let db = mongojs('namestack', ['namestack']);
let bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/cardinfo', function (req, res) {
  console.log("GET request made.");

  db.namestack.find(function (err, docs) {
    console.log(docs);

    res.json(docs);
  });
});

app.post('/cardinfo', function (req, res) {
  console.log(req.body);
  db.namestack.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/cardinfo/:id', function (req, res) {
  let id = req.params.id;
  console.log(id);
  db.namestack.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  })
});

let port = 3000;

app.listen(port);
console.log("Running on " + port.toString());
