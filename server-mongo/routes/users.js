const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
	try {
		const users = await User.all();
		res.status(200).json({ data: users });
	} catch (error) {
		res.status(500).json({
			message: "Can't fetch users from database at the moment "
		});
	}
});

router.post('/', async (req, res) => {
	try {
		const { username, location } = req.body;
		const user = await User.create(username, location);

		res.status(201).json({
			message: `User '${username}' has been added to the database`,
			data: user
		});
	} catch (error) {
		res.status(400).json({ message: 'Something went wrong' });
	}
});

module.exports = router;
