const express = require('express');
const router = express.Router();

const passPort = require('../../services/passport');
const chatController = require('./chatController');

// router.get('/users',passPort.authenticate('jwt',{session: false}),userController.getAllUser);
router.post('/match-chat', passPort.authenticate('jwt',{session: false}), chatController.getMatchChatHistoryById);

// router.post('/infouser',passPort.authenticate('jwt',{session: false}),userController.getUserById);

// router.post('/changeblock',passPort.authenticate('jwt',{session: false}),userController.changeBlockById)

module.exports = router;