const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express(); //initialize express

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// const PORT = process.env.port;

const SELECT_ALL_BETS_QUERY = "SELECT * FROM bets";

const connection = mysql.createConnection({
    host: "database-2.czmahuylwyxb.eu-central-1.rds.amazonaws.com", //http://www.woistluis.moodlions.de
    user: "admin", //d02f0948 //d02cda97
    password: "asdf1234", //*woistluis# //*master1819devproj#
    database: "woistluisdb" //d02f0948 //d02cda97
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://ec2-54-157-54-3.compute-1.amazonaws.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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
                data: results,
                test: "penis"
            })
        }
    })
});

app.get("/bets/add", (req, res) => {
    const {name, bet} = req.query;
    const NAME_CHECK_QUERY = `SELECT bet, COUNT(*) as cnt FROM bets WHERE name = "${name}"`;
    const NAME_CHECK_RES = connection.query(NAME_CHECK_QUERY, (err, result) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send({
                success: "NameCheck",
                check: result.length
            })
        }
    });
    const INSERT_BET = `INSERT INTO bets (name, bet, timestamp) VALUES(?,?,CURTIME())`;
    const UPDATE_BET = `UPDATE bets SET bet=? WHERE name=?`;
    if (connection.query(NAME_CHECK_RES[0].cnt) === 1) {
        connection.query(UPDATE_BET, [bet, name], (err, result) => {
            if (err) {
                return res.send(err)
            } else {
                return res.send({
                    success: true,
                    check: result
                })
            }
        })
    } else {
        connection.query(INSERT_BET,[name, bet],(err, result) => {
            if (err) {
                return res.send(err);
            }
            else {
                return res.send({
                    success: true,
                    name_check: result
                });
            }
        })
    }
    // const INSERT_BET = `INSERT INTO bets (name, bet, timestamp) VALUES("${name}", "${bet}", CURTIME())`; //`SELECT bet, COUNT(*) as cnt FROM bets WHERE name = "${name}"`
});

app.listen(4000, () => {
    console.log("I'm listening to port 4000")
});