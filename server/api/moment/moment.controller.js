const User = require('../user/user.model');

let methods = {};

methods.createMoment = function(req, res) {
	const date = req.body.date;
	const moment = req.body.moment;
	const email = req.body.email;

	User.findOne({ email: email })
		.then( user => {
			user.moments.push({ date, moment });
			// this changes the encrypted password... watch out
			user.save();
			res.status(200).json({ message: 'Your moment was saved.' });
		})
		.catch(() => {
			res.status(422).json({ error: 'moment failed to be saved' });
		});
}

methods.getMoments = function(req, res) {
	const email = req.headers.username;

	User.findOne({ email })
		.then( user => {
			const moments = user.moments
			res.status(200).json({ moments });
		})
		.catch(() => {
			res.status(422).json({ error: 'moment failed to be saved' });
		});
}


let Controller = {
	createMoment: (req, res) => {
		methods.createMoment(req, res);
	},
	getMoments: (req, res) => {
		methods.getMoments(req, res);
	}
};

module.exports = Controller;
