const express = require('express');
const router = express.Router();

const { getActivities } = require('../controller/activities');

router.get('/activities', getActivities);

module.exports = router;