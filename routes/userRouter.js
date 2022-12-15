const express = require('express')
const router = express.Router();
const userController = require('../controller/userController');

router.post('/create', userController.create);

router.delete('/delete', userController.delete);

router.put('/update', userController.update);

module.exports = router;