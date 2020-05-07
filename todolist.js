var fs = require("fs");
var data = fs.readFileSync('words.json');
var tasks = JSON.parse(data);
console.log(tasks);
console.log('server is starting..');

const express = require("express");
let app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("public"));
    app.set("view engine", "ejs");
    var items = [];
    var namesOnWheel = [];
    var selectedNames = [];
    var data = [];


app.get("/", (req, res)=> res.render("pages/index"));

app.get("/test", (req, res) => res.render("pages/test"));

app.get("/todolist", (req, res) => res.render("pages/todolist", {
    items:items
}));

app.post("/test", (req, res) => {
    items = [];
    req.body.items.split(", ").map((item)=>items.push(item.trim()));
    res.redirect("/todolist");
});

app.get("/add/:word/:score?", (req, res) => {
    var data = request.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;
    if(!score) {
        reply = {
            msg: "Score is required."
        }
    } else {
        tasks[task] = score;
        var data = JSON.stringify(words, null, 2);
        fs.writeFile('words.json', words, finished);

        function finished(err) {
            console.log('all.set');
            reply = {
                word: word,
                score: score,
                status: "success"
            }
            response.send(Reply);
        } 
        
        reply = {
            msg: "Thank you for your word."
        }
    }
});


/*if(req.method == 'POST') {
    req.on('data', function(chunk) {
        var element = JSON.parse(chunk);
        fs.readFile("words.json", 'r', function(err, json) {
            var array = JSON.parse(json);
            array.push(element);
            fs.writeFile('words.json', JSON.stringify(array), "w", function(err) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("The file was saved!");
            });
        });
        res.end('{"msg": "success"}');
    });
} */

app.listen(5000, listening);
function listening() {
    console.log("listening..");
}