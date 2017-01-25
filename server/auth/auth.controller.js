const User = require('../api/user/user.model');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

let methods = {};

methods.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;
	const name = req.body.name;

	if (!email || !password || !name) {
		return res.status(422).send({ error: 'You must provide an email, a password, and a name' });
	}

	let encryptedPassword;
	User.findOne({ email: email }, (err, existingUser) => {
		if (err) { return next(err); }
		if (existingUser) {
			return res.status(422).send({ error: 'Email is in use' });
		}

		// encrypt password here
		bcrypt.genSalt(10, function(err, salt) {
	    if (err) { return next(err); }
	    bcrypt.hash(password, salt, null, function(err, hash) {
	      if (err) { return next(err); }
	      encryptedPassword = hash;
				const user = new User({
					email: email,
					password: encryptedPassword,
					name: name
				});
				user.save( err => {
					if (err) { return next(err); }
					res.json({ token: tokenForUser(user) });
				});
	    });
	  });
	});
}

methods.login = function(req, res, next) {
	res.send({ token: tokenForUser(req.user), name: req.user.name });
}

methods.searchEmails = function(req, res, next) {
	const email = req.body.email;
	User.findOne({ email: email }, (err, existingUser) => {
		if (err) { return next(err); }
		if (existingUser) {
			return res.status(200).send({ emailFound: 'yes' });
		}
		else {
			return res.status(200).send({ emailFound: 'no' });
		}
	});
}

let Controller = {
	searchEmails(req, res, next) {
		methods.searchEmails(req, res, next);
	},
	signup(req, res, next) {
		methods.signup(req, res, next);
	},
	login(req, res, next) {
		methods.login(req, res, next);
	}
};

module.exports = Controller;
