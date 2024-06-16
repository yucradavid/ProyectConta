const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/compras');

router.post('/', comprasController.createCompra);
router.get('/', comprasController.getAllCompras);

module.exports = router;
