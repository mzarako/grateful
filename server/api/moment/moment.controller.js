const User = require('../user/user.model');

let methods = {};

methods.createMoment = function(req, res) {

	console.log('in createMoment server side');
	console.log(req.body);

	const date = req.body.date;
	const moment = req.body.moment;
	const dateID = req.body.id;

	User.findOne({ email: req.body.email })
		.then((user) => {
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
		})


}

methods.getMoments = function(req, res) {
	res.status(200);
}

let Controller = {
	createMoment: (req, res) => {
		methods.createMoment(req, res);
	}
};

module.exports = Controller;
