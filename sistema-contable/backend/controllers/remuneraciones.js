const db = require('../db/database');

exports.createRemuneracion = (req, res) => {
    const { fecha, empleado, salario, beneficios, descuentos } = req.body;

    db.run('INSERT INTO remuneraciones (fecha, empleado, salario, beneficios, descuentos) VALUES (?, ?, ?, ?, ?)', [fecha, empleado, salario, beneficios, descuentos], function(err) {
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
