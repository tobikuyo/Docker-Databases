const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
	try {
		const users = await User.all();
		res.status(200).json({ data: users });
	} catch (error) {
		res.status(500).json({
			message: 'There was an error retrieving users from the database'
		});
	}
});

router.post('/', async (req, res) => {
	try {
		const { username, location } = req.body;
		const user = await User.create(username, location);
		res.status(201).json({ data: user });
	} catch (error) {
		res.status(400).json({
			message: 'There was an error with adding this new user'
		});
	}
});

module.exports = router;
