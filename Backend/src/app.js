const express = require('express'); // Importa Express
const cors = require('cors'); // Importa CORS

const app = express(); // Inicializa Express

// Habilita CORS
app.use(cors());

// Middleware para analizar JSON
app.use(express.json());

// Importa rutas
const user = require('./route/user.js');
const activities = require('./route/activities.js');
const reservations = require('./route/reservations.js');

// Configura las rutas
app.use('/user', user);
app.use('/activities', activities);
app.use('/reservation', reservations);

// Configuración del puerto
const PORT = process.env.PORT || 8080;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
