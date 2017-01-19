const User = require('./user.model');

let methods = {};

methods.signup = function(body, res) {
	const email = body.email;
	const password = body.password;

	if (!email || !password) {
		return res.status(422).send({ error: 'You must provide email and password' });
	}

	User.findOne({ email: email }, (err, existingUser) => {
		if (err) { return next(err); }
		if (existingUser) {
			return res.status(422).send({ error: 'Email is in use' });
		}
		const user = new User({
			email: email,
			password: password
		});
		user.save( err => {
			if (err) { return next(err); }
			res.json({ success: true });
		});
	})
}

let Controller = {
	signup(req, res, next) {
		methods.signup(req.body, res, next);
	},
	postLetterList: (req, res) => {
		const listWithName = methods.createLetterList(req.params.name);
		res.status(200).json(listWithName);
	},
	putUpdatedList: (req, res) => {
		const updatedList = methods.updateWords(req.body.body);
		res.status(200).json(updatedList);
	},
	deleteList: (req, res) => {
		const emptyList = methods.deleteLetterList();
		res.status(200).json(emptyList);
	}
};

module.exports = Controller;
