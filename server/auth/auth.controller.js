const User = require('../api/user/user.model');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

let methods = {};

methods.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;

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
			res.json({ token: tokenForUser(user) });
		});
	})
}

methods.login = function(req, res, next) {
	res.send({ token: tokenForUser(req.user) });
}

let Controller = {
	signup(req, res, next) {
		methods.signup(req, res, next);
	},
	login(req, res, next) {
		methods.login(req, res, next);
	}
};

module.exports = Controller;
