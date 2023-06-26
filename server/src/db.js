const path = require('path');
const { Memoria } = require( '@kamerrezz/libs');
const sqlite = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, 'db.sqlite');

const db = new sqlite.Database(dbPath);

const Cars = {
	id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
	model: 'TEXT',
	brand: 'TEXT',
	price: 'INTEGER',
	km: 'INTEGER',
	year: 'INTEGER',
	color: 'TEXT',
	cambio: 'TEXT',
	cv: 'INTEGER',
	doors: 'INTEGER',
	combustible: 'TEXT',
	modif: 'TEXT',
	info: 'TEXT',
	img: 'TEXT',
	images: 'TEXT',
	popular: 'INTEGER',
};
// text = texto | integer = numero

const CarSQL = new Memoria('cars', Cars, db);

module.exports = {
    CarSQL
}