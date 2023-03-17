const checkInModel = require("../models/checkInModel");


let checkInController = {};

checkInController.readAll = (req, res) => {
    checkInModel.readAll((result) => {
        console.log(result);
        res.json(result);
    });
}

checkInController.create = (req, res) => {
    checkInModel.create(req.body, (result) => {
        res.json({ 'msg': 'Success', result })
    });
}

module.exports = checkInController;