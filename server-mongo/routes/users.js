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

module.exports = router;
