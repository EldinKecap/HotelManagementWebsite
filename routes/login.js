const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');
const {createNewAccount} = require('../controller/createNewAccountController');

router.get('/login',loginController.get);
router.get('/createNewAccount',createNewAccount)
module.exports = router;