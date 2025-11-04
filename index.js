const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 8000;
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

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
app.put('/', function(req, res) {
    var index = req.body.index;
    var newItem = req.body.ele1;
    if (items[index] && newItem && newItem.trim() !== "") {
        items[index] = newItem.trim();
    }
    res.redirect('/');
});
app.delete('/', function(req, res) {
    var index = req.body.index;
    if (items[index]) {
        items.splice(index, 1);
    }
    res.redirect('/');
});

app.listen(8000, function() {
    console.log("Server started");
});
