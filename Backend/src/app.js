const express = require('express');

const a  = require ('./route/user.js')

const app = express();
app.use(express.json());

app.use('/', user);

app.listen(8080, () => {
    console.log('Se ha iniciado el backend en el puerto 8080');
});
