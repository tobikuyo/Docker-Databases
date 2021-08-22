const User = require('../models/User');
const db = require('../database/config');

/**
 * Get all users from the database and return them as instances of  the 'User' model.
 * @param {User} userModel should be called with the 'User' model.
 */
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

const findUserWithId = (id, userModel) => async (resolve, reject) => {
	const User = userModel;

	try {
		const data = await db.query('SELECT * FROM users WHERE id = $1;', [id]);
		const user = new User(data.rows[0]);
		resolve(user);
	} catch (error) {
		reject('Could not find a user with that id');
	}
};

/**
 * @param {User} userModel should be called with the 'User' model.
 */
const addNewUser = (username, location, userModel) => async (resolve, reject) => {
	const User = userModel;

	try {
		const data = await db.query(
			'INSERT INTO users (username, location) VALUES($1, $2) RETURNING *;',
			[username, location]
		);
		const user = new User(data.rows[0]);
		resolve(user);
	} catch (error) {
		reject('Error adding new user to the database');
	}
};

/**
 * @param {User} userModel should be called with the 'User' model.
 */
const updateUser = (id, update, userModel) => async (resolve, reject) => {
	const User = userModel;

	try {
		const data = await db.query(
			`UPDATE users SET username = $1, location = $2 WHERE id = $3 RETURNING *;`,
			[update.username, update.location, id]
		);
		const user = new User(data.rows[0]);
		resolve(user);
	} catch (error) {
		reject('Error updating user');
	}
};

module.exports = { getAllUsers, findUserWithId, addNewUser, updateUser };
