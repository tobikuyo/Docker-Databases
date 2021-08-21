const {
	fetchAllUsers,
	addNewUser,
	findUserWithId
} = require('../controllers/users');

class User {
	constructor(data) {
		this.id = data.id;
		this.username = data.username;
		this.location = data.location;
	}

	static all() {
		return new Promise(fetchAllUsers(User));
	}

	static find(id) {
		return new Promise(findUserWithId(id, User));
	}

	static create(username, location) {
		return new Promise(addNewUser(username, location, User));
	}
}

module.exports = User;
