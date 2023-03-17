const express = require('express');
const checkInController = require('../controller/checkInController');
const router = express.Router();


router.get('/readAll', checkInController.readAll);
router.post('/create', checkInController.create);

module.exports = router;