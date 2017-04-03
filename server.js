let express = require('express');
let mongojs = require('mongojs');
let app = express();
// let db = mongojs('namestack', ['namestack']);
let bodyParser = require('body-parser');

db = require('mongodb');
db.connect('mongodb://heroku_520l3p63:42qg8nntskvce7m425ruvrrb@ds147480.mlab.com:47480/heroku_520l3p63');
debugger

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

app.get('/cardinfo/:id', function (req, res) {
  let id = req.params.id;
  console.log(id);
  db.namestack.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/cardinfo/:id', function (req, res) {
  let id = req.params.id;
  console.log(req.body.name);
  db.namestack.findAndModify({query: {_id:mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, hp: req.body.hp, atk: req.body.atk, rcv: req.body.rcv}},
    new: true}, function (err, doc) {
      res.json(doc);
  });
});

let port = process.env.PORT || 3000;

app.listen(port);
console.log("Running on " + port.toString());
