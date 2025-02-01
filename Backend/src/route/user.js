const express = require('express');
const router = express.Router();

const { getUser, getUsers, postUser, putUser, deleteUser, loginUser } = require('../controller/User.js');

// Ruta getall todos los usuarios
router.get('/user', getUsers);

// Ruta getone un usuario específico por usuario y contraseña
router.get('/user/:username/:password', getUser);

// Ruta posy un nuevo usuario
router.post('/user', postUser);

// Ruta para el login
router.post('/login', loginUser);

// Ruta put un usuario existente
router.put('/user', putUser); // Actualiza un usuario específico por 'username'

// Ruta delete un usuario específico por 'id'
router.delete('/user/:id', deleteUser);

module.exports = router;