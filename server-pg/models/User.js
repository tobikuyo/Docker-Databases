const { getAllUsers } = require('../controllers/user');

class User {
	constructor(data) {
		this.id = data.id;
		this.username = data.username;
		this.location = data.location;
	}

	static all() {
		return new Promise(getAllUsers(User));
	}
}

module.exports = User;
