const express = require('express');
const cors = require('cors');
const knex = require('knex');


const app = express();
app.use(express.json());
app.use(cors());

const user = require('./route/user.js');
const activities = require('./route/activities.js');
const reservations = require('./route/reservations.js')


app.use('/user', user); 
app.use('/activities', activities); 
app.use('/reservation',reservations)

app.listen(8080, () => {
    console.log('Se ha iniciado el backend en el puerto 8080');
});
