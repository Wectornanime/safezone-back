const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.post('/report', reportController.createReport);
router.get('/report', reportController.getReports);
router.put('/report/:id', reportController.updateReport);
router.delete('/report/:id', reportController.deleteReport);

module.exports = router;