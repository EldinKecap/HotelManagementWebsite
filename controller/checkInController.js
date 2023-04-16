const checkInModel = require("../models/checkInModel");


let checkInController = {};

checkInController.readAll = (req, res) => {
    checkInModel.readAll((result) => {
        // console.log(result);
        res.json(result);
    });
}

checkInController.readOne = (req, res) => {
    checkInModel.readOne(req.params.userId, (result) => {
        // console.log(result);
        res.json(result);
    });
}

checkInController.create = (req, res) => {
    checkInModel.create(req.body, (result) => {
        if (result.hasOwnProperty('error')) {
            res.json({ 'msg': 'Error', error: result.error });
            return
        }
        res.json({ 'msg': 'Success', result })
    });
}

checkInController.checkOut = (req, res) => {
    checkInModel.checkOut(req.body, (result) => {
        res.json({ msg: 'Success', result })
    })
}

module.exports = checkInController;