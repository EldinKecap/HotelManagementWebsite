const express = require('express')
const router = express.Router();
const userController = require('../controller/userController');

router.post('/create', userController.create);

router.delete('/delete', userController.delete);

router.put('/update/:id', userController.update);

router.get('/readAll', userController.readAll);

router.get('/readOne/:id', userController.readOne);

module.exports = router;