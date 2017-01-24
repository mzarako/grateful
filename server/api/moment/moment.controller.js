const User = require('../user/user.model');

let methods = {};

methods.createMoment = function(req, res) {
	const date = req.body.date;
	const moment = req.body.moment;
	const dateID = req.body.id;

	User.findOne({ email: req.body.email })
		.then( user => {
			user.moments.push({ date, moment, dateID });
			return user.save();
		})
		.then(() => {
			user = User.findOne({ email: req.user.email });
			res.status(200).json({
				posts: user.posts
			});
		})
		.catch(() => {
			res.status(422).json({ error: 'moment failed to be saved' });
		});
}

methods.getMoments = function(req, res) {
	const email = req.headers.username;
	console.log(email);

	User.findOne({ email })
		.then( user => {
			// const moments = user.moments.map( moment => {
			// 	return { date: moment.date, text: moment.moment };
			// })
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
