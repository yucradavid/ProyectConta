const db = require('../db/database');

exports.createCompra = (req, res) => {
    const { fecha, proveedor, monto, impuestos } = req.body;

    if (!fecha || !proveedor || isNaN(parseFloat(monto)) || isNaN(parseFloat(impuestos))) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios y deben ser válidos.' });
    }

    db.run('INSERT INTO compras (fecha, proveedor, monto, impuestos) VALUES (?, ?, ?, ?)', [fecha, proveedor, monto, impuestos], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
};

exports.getAllCompras = (req, res) => {
    db.all('SELECT * FROM compras', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ compras: rows });
    });
};
