const express = require('express');
const router = express.Router();
const libroCajaController = require('../controllers/libroCaja');

router.post('/', libroCajaController.createMovimiento);
router.get('/', libroCajaController.getAllMovimientos);

module.exports = router;
