const express = require('express')
const router = express.Router();
const roomController = require('../controller/roomController')


router.get( '/readAll', roomController.readAll );

module.exports = router;