const express = require('express');
const router = express.Router();

const passPort = require('../../services/passport');
const historyController = require('./historyController');

// router.get('/histories',passPort.authenticate('jwt',{session: false}),historyController.getAllHistories);
router.get('/histories', historyController.getAllHistories);

router.post('/details', historyController.getHistoryById);

router.post('/historiesuser', historyController.getHistoriesUser);

module.exports = router;