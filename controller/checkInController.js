const checkInModel = require("../models/checkInModel");


let checkInController;

checkInController.readAll = (req, res) => {
    checkInModel.readAll();
}

module.exports = checkInController;