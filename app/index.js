const express = require('express');
const app = express();
const port = 7272;

const path = __dirname + '/views/';

app.get('/', function(req, res){
        res.sendFile(path + 'index.html');
        })
// Setup the static location for images <- so express knows this is where static files are
app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
           console.log('listening on: ' + port);
           })




