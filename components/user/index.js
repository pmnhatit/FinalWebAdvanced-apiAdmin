const express = require('express');
const router = express.Router();

const passPort = require('../../services/passport');
const userController = require('./userController')

// router.get('/users',passPort.authenticate('jwt',{session: false}),userController.getAllUser);
router.get('/users',userController.getAllUser);

router.post('/infouser',userController.getUserById);

module.exports = router;