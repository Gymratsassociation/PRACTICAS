const express = require('express');
const router = express.Router();


const{} = require('../controller.user.js');

router.get('user/, getUsers'); // info todos los usuarios
router.get('/user/:*', get);
router.post('/user/:',post);
router.put('/user/:', put);
//router.delete('/user/:', delete);
