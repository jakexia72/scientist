const express = require('express');
const app = express();
const port = 7272;

const path = __dirname + '/views/';

app.get('/', function(req, res){
        res.sendFile(path + 'index.html');
        })

app.listen(port, function(){
           console.log('listening on: ' + port);
           })




