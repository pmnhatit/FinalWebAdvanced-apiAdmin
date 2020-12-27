const express = require('express');
const router = express.Router();

const adminController = require('./adminController');
const passPort = require('../../services/passport');

router.get('/signin',passPort.authenticate('local', { session: false }),adminController.signIn);

router.post('/signin',passPort.authenticate('local', { session: false }),adminController.signIn);

router.put('/edit',passPort.authenticate('jwt', { session: false }),adminController.updateInfo);

router.post('/addadmin',passPort.authenticate('jwt',{session: false}),adminController.createAdmin);

module.exports = router;