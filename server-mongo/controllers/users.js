const User = require('../models/User');
const init = require('../database/config');

/**
 * Get all users from the database and return them as instances of  the 'User' model.
 * @param {User} userModel this function should be called with the 'User' model.
 */
const fetchAllUsers = userModel => async (resolve, reject) => {
	const User = userModel;

	try {
		const db = await init();
		const data = await db.collection('users').find().toArray();
		const users = data.map(user => new User({ ...user, id: user._id }));
		resolve(users);
	} catch (error) {
		reject('Error getting all users from database');
	}
};

/**
 * Add a new user to the database and return it as an instance of the 'User' model.
 * @param {User} userModel this function should be called with the 'User' model.
 */
const addNewUser = (username, location, userModel) => async (resolve, reject) => {
	const User = userModel;

	try {
		const db = await init();
		const data = await db.collection('users').insertOne({ username, location });
		const user = new User({ username, location, id: data.insertedId });
		resolve(user);
	} catch (error) {
		reject('Error adding new user to the database');
	}
};

module.exports = { fetchAllUsers, addNewUser };
