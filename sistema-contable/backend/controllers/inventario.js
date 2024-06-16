const db = require('../db/database');

exports.createInventario = (req, res) => {
    const { producto, cantidad, precio } = req.body;

    if (!producto || isNaN(parseInt(cantidad)) || isNaN(parseFloat(precio))) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios y deben ser válidos.' });
    }

    db.run('INSERT INTO inventario (producto, cantidad, precio) VALUES (?, ?, ?)', [producto, cantidad, precio], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
};

exports.getAllInventario = (req, res) => {
    db.all('SELECT * FROM inventario', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ inventario: rows });
    });
};
