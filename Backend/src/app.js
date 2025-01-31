const express = require('express');

const user = require('./route/user.js');
const activities = require('./route/activities.js');

const app = express();
app.use(express.json());

app.use('/users', user); 
app.use('/activities', activities); 

app.listen(8080, () => {
    console.log('Se ha iniciado el backend en el puerto 8080');
});