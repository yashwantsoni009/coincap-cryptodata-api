var express = require('express');
var app = express();
app.use(express.static(_dirname + '/src'));
app.listen(process.env.PORT || 3000);
