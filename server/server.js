const express = require('express')
const app = express()
const bodyparser = require("body-parser")
const cors = require('cors')
const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

conn.connect(err => {
    if(err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});

app.use(express.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({welcome: "welcome from the server"})
})

app.post('/create', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let type = "patient";
    
    //Create new patient account
    conn.query(                
        `INSERT INTO users (email, password, type) VALUES ('${email}', '${password}', '${type}')`,
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });        
})

app.post('/checkUser', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;    
    
    //Create new patient account
    conn.query(                
        `SELECT * FROM users WHERE email='${email}'`,
        (err, results) => {
            if(err) {
                console.log(err);
            }

            if(results.length > 0) {                                
                if(results[0].password === password) {
                    console.log("Logged In")
                    res.redirect('http://localhost:3000/patient');
                } else {                    
                    console.log("Wrong password")                    
                }
            }
        });        
})

const port = 3001
app.listen(port, () => console.log("Server running on PORT 3001"))