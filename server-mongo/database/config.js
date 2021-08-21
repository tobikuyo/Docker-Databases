const { MongoClient } = require('mongodb');

const dbConnection = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME;

const init = async () => {
	const client = await MongoClient.connect(dbConnection);
	const db = client.db(dbName);
	db.createCollection('users', (err, res) => {
		if (err) throw err;
	});

	return db;
};

module.exports = init;
