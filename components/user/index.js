const express = require('express');
const router = express.Router();

const userController = require('./userController');
const passPort = require('../../services/passport');

router.get('/signin',passPort.authenticate('local', { session: false }),userController.signIn);

router.post('/signin',passPort.authenticate('local', { session: false }),userController.signIn);

router.put('/edit',passPort.authenticate('jwt', { session: false }),userController.updateInfo);

router.post('/addadmin',passPort.authenticate('jwt',{session: false}),userController.createAdmin);

module.exports = router;