const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario');

router.post('/', inventarioController.createInventario);
router.get('/', inventarioController.getAllInventarios);

module.exports = router;
