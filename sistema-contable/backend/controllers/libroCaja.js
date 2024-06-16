const db = require('../db/database');

exports.createLibroCaja = (req, res) => {
    const { fecha, concepto, tipo, monto } = req.body;

    if (!fecha || !concepto || !tipo || isNaN(parseFloat(monto))) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios y deben ser válidos.' });
    }

    db.run('INSERT INTO libro_caja (fecha, concepto, tipo, monto) VALUES (?, ?, ?, ?)', [fecha, concepto, tipo, monto], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
};

exports.getAllLibroCaja = (req, res) => {
    db.all('SELECT * FROM libro_caja', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ libroCaja: rows });
    });
};
