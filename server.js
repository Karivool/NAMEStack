let express = require('express');
let app = express();

app.use(express.static(__dirname + "/public"));

app.get('/cardinfo', function (req, res) {
  console.log("GET request made.");

  chr1 = {
    name: "Pizzer",
    hp: 2900,
    atk: 1650,
    rcv: 444
  };

  chr2 = {
    name: "Brooker",
    hp: 2800,
    atk: 1400,
    rcv: 751
  };

  chr3 = {
    name: "Lifter",
    hp: 2200,
    atk: 2100,
    rcv: -100,
  };

  let cardinfo = [chr1, chr2, chr3];
  res.json(cardinfo);
});

let port = 3000;

app.listen(port);
console.log("Running on " + port.toString());
