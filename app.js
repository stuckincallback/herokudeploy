var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', (req, res)=>  {
    res.send('hello world no more random text');
})

app.listen(port);