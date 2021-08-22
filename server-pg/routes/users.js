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

router.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.find(id);
		res.status(200).json({ data: user });
	} catch (error) {
		res.status(404).json({ message: `There is no user with the id '${id}'` });
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

router.patch('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.find(parseInt(id));
		const updatedUser = await user.update(req.body);
		res.status(200).json({ data: updatedUser });
	} catch (error) {
		res.status(404).json({ message: `There is no user with the id '${id}'` });
	}
});

module.exports = router;
