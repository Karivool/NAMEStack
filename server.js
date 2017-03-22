let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send("Server now running")
});

let port = 3000;

app.listen(port);
console.log("Running on " + port.toString());
