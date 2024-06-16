const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'mydatabase.db'); // Ruta al archivo de la base de datos

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite');
    }
});

db.serialize(() => {
    // Crea las tablas si no existen
    db.run("CREATE TABLE IF NOT EXISTS ventas (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha TEXT, cliente TEXT, bi REAL, igv REAL, total REAL)");
    db.run(`
        CREATE TABLE IF NOT EXISTS compras (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fecha TEXT,
            proveedor TEXT,
            monto REAL,
            impuestos REAL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS remuneraciones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fecha TEXT,
            empleado TEXT,
            salario REAL,
            bonificaciones REAL,
            descuentos REAL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS libro_caja (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fecha TEXT,
            concepto TEXT,
            tipo TEXT,
            monto REAL
        )
    `);
    // Agrega más tablas según sea necesario
    
});

module.exports = db;
