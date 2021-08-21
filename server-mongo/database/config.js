const { MongoClient } = require('mongodb');

const dbConnection = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME;

const init = async () => {
	const client = await MongoClient.connect(dbConnection);
	return client.db(dbName);
};

module.exports = init;
