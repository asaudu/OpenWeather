const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

//const MY_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const PORT = 8080;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});



// app.get("/getWeather", (req, res) => {
//     request(
//         `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${MY_KEY}`,
//         function(error, response, body) {
//         if(!error && response.statusCode === 200) {
//             res.send(body);
//          }
//        }
//     );
// });

//create the get request
app.get('/api/users', cors(), async (req, res) => {
    try{
        const { rows: users } = await db.query('SELECT * FROM users');
        res.send(users);
    } catch (e){
        console.log(e)
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/api/users', cors(), async (req, res) => {
    const newUser = { user_name: req.body.user_name, favorite_city: req.body.favorite_city }
    console.log([newUser.user_name, newUser.favorite_city]);
    const result = await db.query(
        'INSERT INTO users(user_name, favorite_city) VALUES($1, $2) RETURNING *',
        [newUser.username, newUser.favoritecity]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});