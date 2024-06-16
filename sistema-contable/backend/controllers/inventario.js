const db = require('../db/database');

exports.createInventario = (req, res) => {
    const { fecha, producto, cantidad, precioUnitario } = req.body;

    db.run('INSERT INTO inventario (fecha, producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)', [fecha, producto, cantidad, precioUnitario], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
};

exports.getAllInventarios = (req, res) => {
    db.all('SELECT * FROM inventario', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ inventarios: rows });
    });
};
