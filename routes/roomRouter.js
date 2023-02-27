const express = require('express')
const router = express.Router();
const roomController = require('../controller/roomController')


router.get('/readAll', roomController.readAll);
router.get('/readOne/:id', roomController.readOne);
router.get('/allTypes', roomController.getRoomTypes);
router.post('/create', roomController.create);

module.exports = router;