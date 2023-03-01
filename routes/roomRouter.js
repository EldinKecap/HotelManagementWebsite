const express = require('express')
const router = express.Router();
const roomController = require('../controller/roomController')

const path = require('path');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/roomImages');
    },
    filename: (req, file, cb) => {
        req.body.imageLocation = './roomImages/' + req.body.roomNumber + path.extname(file.originalname)
        cb(null, req.body.roomNumber + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })


router.get('/readAll', roomController.readAll);
router.get('/readOne/:id', roomController.readOne);
router.get('/allTypes', roomController.getRoomTypes);
router.post('/create',
    upload.single('image'),
    roomController.create);

module.exports = router;