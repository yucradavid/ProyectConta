const db = require('../db/database');

exports.createVenta = (req, res) => {
    const { fecha, cliente, bi, igv, total } = req.body;

    if (!fecha || !cliente || isNaN(parseFloat(bi)) || isNaN(parseFloat(igv)) || isNaN(parseFloat(total))) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios y deben ser válidos.' });
    }

    db.run('INSERT INTO ventas (fecha, cliente, bi, igv, total) VALUES (?, ?, ?, ?, ?)', [fecha, cliente, bi, igv, total], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
};

exports.getAllVentas = (req, res) => {
    db.all('SELECT * FROM ventas', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ ventas: rows });
    });
};
// Eliminar venta por ID
exports.deleteVenta = (req, res) => {
    const { id } = req.params;

    db.run('DELETE FROM ventas WHERE id = ?', id, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: `Venta con ID ${id} eliminada correctamente.` });
    });
};

// Editar venta por ID
exports.updateVenta = (req, res) => {
    const { id } = req.params;
    const { fecha, cliente, bi, igv, total } = req.body;

    if (!fecha || !cliente || isNaN(parseFloat(bi)) || isNaN(parseFloat(igv)) || isNaN(parseFloat(total))) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios y deben ser válidos.' });
    }

    db.run('UPDATE ventas SET fecha = ?, cliente = ?, bi = ?, igv = ?, total = ? WHERE id = ?', [fecha, cliente, bi, igv, total, id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: `Venta con ID ${id} actualizada correctamente.` });
    });
};