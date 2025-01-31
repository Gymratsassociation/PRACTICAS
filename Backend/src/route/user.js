const express = require('express');
const router = express.Router();

const { getUser, getUsers, postUser, putUser, deleteUser } = require('../controller/User.js');

router.get('./user', getUsers); // Devuelve todos los usuarios
router.get('./user/:username', getUser); // Devuelve un usuario específico por 'username'

// Ruta para crear un nuevo usuario
router.post('./user', postUser);

// Ruta para actualizar un usuario existente
router.put('./user/:username', putUser); // Actualiza un usuario específico por 'username'

// Ruta para eliminar un usuario especifico por id
router.delete('./user/:id', deleteUser);
module.exports = router;