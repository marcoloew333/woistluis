const express = require("express");
// const cors = require("cors");
const mysql = require("mysql");

const app = express(); //initialize express

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// const PORT = process.env.port;

const SELECT_ALL_BETS_QUERY = "SELECT * FROM bets";

const connection = mysql.createConnection({
    host: "www.woistluis.moodlions.de", //http://www.woistluis.moodlions.de
    user: "d02f0948", //d02f0948 //d02cda97
    password: "*woistluis#", //*woistluis# //*master1819devproj#
    database: "d02f0948" //d02f0948 //d02cda97
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

// app.use(cors());
app.use(express.static("/home/ubuntu/woistluis/Client/build"));

app.get("/", function(req, res){
    res.sendFile("/home/ubuntu/woistluis/Client/build/index.html");
});

app.get("/bets", (req, res) => {
    connection.query(SELECT_ALL_BETS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
});

app.get("/bets/add", (req, res) => {
    const {name, bet} = req.query;
    const act_time = new Date();
    // const INSERT_BET = `INSERT INTO markers (id, name, address, lat, lng, type) VALUES ('2, ${name}, ${bet}, ${count1}, ${count2}, ${type}')`;
    const INSERT_BET = `INSERT INTO bets (name, bet, timestamp) VALUES("${name}", "${bet}", "${act_time}")`;
    connection.query(INSERT_BET, (err, res) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send("succesfully added your bet")
        }
    })
});

app.listen(4000, () => {
    console.log("I'm listening to port 4000")
});