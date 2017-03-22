let express = require('express');
let app = express();

app.use(express.static(__dirname + "/public"));

let port = 3000;

app.listen(port);
console.log("Running on " + port.toString());
