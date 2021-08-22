const { getAllUsers, addNewUser } = require('../controllers/user');

class User {
	constructor(data) {
		this.id = data.id;
		this.username = data.username;
		this.location = data.location;
	}

	static all() {
		return new Promise(getAllUsers(User));
	}

	static create(username, location) {
		return new Promise(addNewUser(username, location, User));
	}
}

module.exports = User;
