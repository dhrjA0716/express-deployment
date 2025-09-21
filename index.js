const express = require('express');
const bodyParser = require('body-parser');



var app = express();
const port = process.env.PORT || 8000;
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

var items = []

var example="working";
app.get('/', function(req, res) {
    res.render("list",{ejes : items});
}); 

app.post('/', function(req, res) {
    var item = req.body.ele1;
    if (item && item.trim() !== "") {
        items.push(item.trim());
    }
    res.redirect('/');
});





app.listen(8000, function() {
    console.log("Server started");
    });