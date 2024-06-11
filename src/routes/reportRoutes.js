const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.post('/report', reportController.createReport);
router.get('/report', reportController.getReports);

module.exports = router;