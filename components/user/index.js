const express = require('express');
const router = express.Router();

const passPort = require('../../services/passport');
const userController = require('./userController')

// router.get('/users',passPort.authenticate('jwt',{session: false}),userController.getAllUser);
router.get('/users',passPort.authenticate('jwt',{session: false}),userController.getAllUser);

router.post('/infouser',passPort.authenticate('jwt',{session: false}),userController.getUserById);

router.post('/changeblock',passPort.authenticate('jwt',{session: false}),userController.changeBlockById)

module.exports = router;