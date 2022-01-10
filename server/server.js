const express = require('express')
const app = express()
const bodyparser = require("body-parser")
const cors = require('cors')
const mysql = require('mysql')
const dotenv = require('dotenv')

const session = require("express-session")
const cookieParser = require("cookie-parser")

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
app.use(cookieParser())

app.use(session({
    key: "userId",
    secret: "signup",
    resave: true, 
    saveUninitialized: true,
    cookie: {
        expires: 60 * 60 * 24,
        secure: false,
    }
}))

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
                res.send("created");                
            }
        });        
})

app.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;    
    
    //Check if user exists
    conn.query(                
        `SELECT * FROM users WHERE email="${email}"`,
        (err, results) => {
            if(err) {
                console.log(err);
            }

            if(results.length > 0) {
                if(results[0].password === password) {
                    //Session                    
                    let email = session.user = results[0].email;
                    let type = session.type = results[0].type;                                                             
                    res.send({email, type})
                } else {                    
                    console.log("Wrong password")                    
                }
            }
        });        
})

app.get('/session', (req, res) => {
    if(session.user) {
        res.send("loggedIn");        
    } else {
        res.send("notLoggedIn");
    }
})




const port = 3001
app.listen(port, () => console.log("Server running on PORT 3001"))