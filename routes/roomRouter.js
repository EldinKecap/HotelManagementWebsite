const express = require('express')
const router = express.Router();
const roomController = require('../controller/roomController')


router.get('/readAll', roomController.readAll);
router.get('/readOne/:id', roomController.readOne);
router.get('/allTypes', roomController.getRoomTypes);
router.post('/create', roomController.create);
router.put('/update', roomController.update);
router.delete('/delete/:roomNumber', roomController.delete)



module.exports = router;