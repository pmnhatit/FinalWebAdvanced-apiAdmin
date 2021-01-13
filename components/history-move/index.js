const express = require('express');
const router = express.Router();

const passPort = require('../../services/passport');
const moveController = require('./moveController');

// router.get('/users',passPort.authenticate('jwt',{session: false}),userController.getAllUser);
router.post('/history-move', passPort.authenticate('jwt',{session: false}), moveController.getMoveByIdMatch);

// router.get('/history-move', moveController.getMoveByIdMatch);

module.exports = router;