const express = require('express');
const checkInController = require('../controller/checkInController');
const router = express.Router();


router.get('/readAll', checkInController.readAll);
router.get('/readOne/:userId', checkInController.readOne);
router.post('/create', checkInController.create);
router.put('/checkOut', checkInController.checkOut);

module.exports = router;