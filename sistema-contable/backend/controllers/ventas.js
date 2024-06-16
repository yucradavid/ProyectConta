const db = require('../db/database');

exports.createVenta = (req, res) => {
    const { fecha, cliente, bi, impuestos } = req.body;
    const pt = parseFloat(bi) + parseFloat(impuestos); // Calcular precio total

    db.run('INSERT INTO ventas (fecha, cliente, bi, impuestos, pt) VALUES (?, ?, ?, ?, ?)', [fecha, cliente, bi, impuestos, pt], function(err) {
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
