const init = require('../database/config');

const fetchAllUsers = userModel => async (resolve, reject) => {
	try {
		const db = await init();
		const data = await db.collection('users').find().toArray();
		const users = data.map(user => new userModel({ ...user, id: user._id }));
		resolve(users);
	} catch (error) {
		reject('Error getting all users from database');
	}
};

module.exports = { fetchAllUsers };
