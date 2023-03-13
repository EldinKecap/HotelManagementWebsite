const checkInModel = require("../models/checkInModel");


let checkInController = {};

checkInController.readAll = (req, res) => {
    checkInModel.readAll((result)=>{
        console.log(result);
        res.json(result);
    });
}

module.exports = checkInController;