const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventas');

router.post('/', ventasController.createVenta);
router.get('/', ventasController.getAllVentas);

module.exports = router;
