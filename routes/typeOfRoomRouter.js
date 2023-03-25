const { Router } = require("express");
const typeOfRoomController = require("../controller/typeOfRoomController");

let router = Router();

router.post('/create', typeOfRoomController.create);

module.exports = router;