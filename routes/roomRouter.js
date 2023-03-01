const express = require('express')
const router = express.Router();
const roomController = require('../controller/roomController')

const path = require('path');
const multer = require('multer');
const roomModel = require('../models/roomModel');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/roomImages');
    },
    filename: (req, file, cb) => {

        req.body.imageLocation = './roomImages/' + req.body.roomNumber + path.extname(file.originalname)
        cb(null, req.body.roomNumber + path.extname(file.originalname))
    },

})

let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // console.log(req.body);
        // if (req.body.update) {
        //     console.log('yo');
        // }else{
            // console.log('oy');
            roomModel.readOneByRoomNumber(req.body.roomNumber, (result) => {
                if (result.length > 0) {
                    cb(null, false)
                } else {
                    cb(null, true)
                }
            })
        // }
    }
})




router.get('/readAll', roomController.readAll);
router.get('/readOne/:id', roomController.readOne);
router.get('/allTypes', roomController.getRoomTypes);
router.post('/create',
    upload.single('image'),
    roomController.create);



router.put('/update',
    // upload.single('image'),
    roomController.update);
///////TRY EXPRESS-FILEUPLOAD FOR MULTIPLE ENDPOINTS UPLOAD
module.exports = router;