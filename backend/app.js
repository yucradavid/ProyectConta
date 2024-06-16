const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ventasController = require('./controllers/ventas');
const comprasController = require('./controllers/compras');
const inventarioController = require('./controllers/inventario');
const libroCajaController = require('./controllers/libroCaja');
const remuneracionesController = require('./controllers/remuneraciones');

const app = express();
const port = 1200;

app.use(bodyParser.json());
app.use(cors());

// Rutas para ventas
app.post('/api/ventas', ventasController.createVenta);
app.get('/api/ventas', ventasController.getAllVentas);
app.delete('/api/ventas/:id', ventasController.deleteVenta); // Eliminar venta por ID
app.put('/api/ventas/:id', ventasController.updateVenta);    // Editar venta por ID
// Rutas para compras
app.post('/api/compras', comprasController.createCompra);
app.get('/api/compras', comprasController.getAllCompras);

// Rutas para inventario
app.post('/api/inventario', inventarioController.createInventario);
app.get('/api/inventario', inventarioController.getAllInventario);

// Rutas para libro de caja
app.post('/api/libro-caja', libroCajaController.createLibroCaja);
app.get('/api/libro-caja', libroCajaController.getAllLibroCaja);

// Rutas para remuneraciones
app.post('/api/remuneraciones', remuneracionesController.createRemuneracion);
app.get('/api/remuneraciones', remuneracionesController.getAllRemuneraciones);

app.listen(port, () => {
    console.log(`Servidor API escuchando en http://localhost:${port}`);
});
