const express = require('express');

const user = require('./route/user.js');
const activities = require('./route/activities.js');
const reservations = require('./route/reservations.js')

const app = express();
app.use(express.json());

app.use('/user', user); 
app.use('/activities', activities); 
app.use('/reservation',reservations)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})