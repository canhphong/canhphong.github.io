var express = require('express');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded(extended: false);
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var array = ["Android", "iOS", "PHP", "ReactJS","Angular"];

app.get("/", function (req, res) {
	res.render("homepage");
});

app.port('/getNotes', function(req, res) {
	res.send(array);
})

app.post('/add', parser, function(req, res) {
	var newNote = req.body.note;
	array.push(newNote);
	res.send(array);
});