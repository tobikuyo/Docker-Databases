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

		res.status(201).json({
			message: `User '${username}' has been added to the database`,
			data: user
		});
	} catch (error) {
		res.status(400).json({ message: 'Something went wrong' });
	}
});

router.patch('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.find(id);
		const updatedUser = await user.update(req.body);
		res.status(200).json({ data: updatedUser });
	} catch (error) {
		res.status(404).json({ message: `There is no user with the id '${id}'` });
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.find(id);
		await user.remove();
		res.status(204).json({
			message: `The user with the id '${id}' was removed successfully`
		});
	} catch (error) {
		res.status(404).json({ message: `There is no user with the id '${id}'` });
	}
});

module.exports = router;
