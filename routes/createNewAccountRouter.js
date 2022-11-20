const express = require('express')
const router = express.Router();
const createNewAccount = require('../controller/createNewAccountController');

router.post('/',createNewAccount);

module.exports = router;