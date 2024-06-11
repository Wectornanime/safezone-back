const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.post('/report', reportController.createReport);
router.get('/report', reportController.getReports);
router.put('/reports/:id', reportController.updateReport);
router.delete('/reports/:id', reportController.deleteReport);

module.exports = router;