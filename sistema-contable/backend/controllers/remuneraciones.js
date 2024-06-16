const db = require('../db/database');

exports.createRemuneracion = (req, res) => {
    const { fecha, empleado, salario, bonificaciones, descuentos } = req.body;

    if (!fecha || !empleado || isNaN(parseFloat(salario)) || isNaN(parseFloat(bonificaciones)) || isNaN(parseFloat(descuentos))) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios y deben ser válidos.' });
    }

    db.run('INSERT INTO remuneraciones (fecha, empleado, salario, bonificaciones, descuentos) VALUES (?, ?, ?, ?, ?)', [fecha, empleado, salario, bonificaciones, descuentos], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
};

exports.getAllRemuneraciones = (req, res) => {
    db.all('SELECT * FROM remuneraciones', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ remuneraciones: rows });
    });
};
