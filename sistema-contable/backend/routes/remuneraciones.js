const express = require('express');
const router = express.Router();
const remuneracionesController = require('../controllers/remuneraciones');

router.post('/', remuneracionesController.createRemuneracion);
router.get('/', remuneracionesController.getAllRemuneraciones);

module.exports = router;
