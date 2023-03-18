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
        if (result.hasOwnProperty('error')) {
            res.json({ 'msg': 'Error', error : result.error });console.log('error');
            return
        }
        console.log('whaa');
        res.json({ 'msg': 'Success', result })
    });
}

module.exports = checkInController;