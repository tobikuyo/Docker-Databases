const { fetchAllUsers } = require('../controllers/users');

class User {
	constructor(data) {
		this.id = data.id;
		this.username = data.username;
		this.location = data.location;
	}

	static all() {
		return new Promise(fetchAllUsers(User));
	}

module.exports = User;
