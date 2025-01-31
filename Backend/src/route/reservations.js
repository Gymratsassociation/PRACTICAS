const express = require('express');
const router = express.Router();

const { getReservationsByUserId,postReservation } = require('../controller/reservations.js');

router.get('/reservations', getReservationsByUserId);
router.post('/reservations', postReservation)

module.exports = router;