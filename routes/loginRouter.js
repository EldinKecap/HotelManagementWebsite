const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');
// const {createNewAccount} = require('../controller/createNewAccountController');
console.log(loginController.get);
router.post('/',loginController.get);
// router.get('/createNewAccount',createNewAccount)
module.exports = router;