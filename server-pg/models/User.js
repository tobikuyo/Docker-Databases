const {
	getAllUsers,
	addNewUser,
	updateUser,
	findUserWithId,
	removeUser
} = require('../controllers/user');

class User {
	constructor(data) {
		this.id = data.id;
		this.username = data.username;
		this.location = data.location;
	}

	static all() {
		return new Promise(getAllUsers(User));
	}

	static find(id) {
		return new Promise(findUserWithId(id, User));
	}

	static create(username, location) {
		return new Promise(addNewUser(username, location, User));
	}

	update(body) {
		return new Promise(updateUser(this.id, body, User));
	}

	remove() {
		return new Promise(removeUser(this.id));
	}
}

module.exports = User;
