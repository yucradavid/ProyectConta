const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ventasRouter = require('./routes/ventas');
const comprasRouter = require('./routes/compras');
const remuneracionesRouter = require('./routes/remuneraciones');
const libroCajaRouter = require('./routes/libroCaja');
const inventarioRouter = require('./routes/inventario');

const app = express();
const PORT = process.env.PORT || 1200;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/ventas', ventasRouter);
app.use('/api/compras', comprasRouter);
app.use('/api/remuneraciones', remuneracionesRouter);
app.use('/api/libro-caja', libroCajaRouter);
app.use('/api/inventario', inventarioRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
