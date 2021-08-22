const db = require('../database/config');

const getAllUsers = userModel => async (resolve, reject) => {
	const User = userModel;

	try {
		const data = await db.query('SELECT * FROM users;');
		const users = data.rows.map(user => new User(user));
		resolve(users);
	} catch (error) {
		reject('Error getting all users from the database');
	}
};

module.exports = { getAllUsers };
