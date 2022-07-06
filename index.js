const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql'); 

app.use(express.json());

app.use(cors());


//database connection

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'huzaifa',
});

//post request

app.post('/create', (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender;
    const category = req.body.category;
    const difficulty = req.body.difficulty;
    const email = req.body.email;
    
    db.query('INSERT INTO quiz(name, gender,category,difficulty,email ) VALUES (?,?,?,?,?)', [name, gender,category,difficulty,email], (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("success");
        }
    });

});


//get request

app.get('/get', (req, res) => {
    db.query('SELECT * FROM quiz', (err,result) => {

        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.listen(5000, () => {
    console.log("server is running on port 5000");
})