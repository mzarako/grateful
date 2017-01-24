const router = require('express').Router();
const controller = require('./moment.controller');
const passportService = require('../../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

router.route('/')
	.get(requireAuth, controller.getMoments);

router.route('/')
	.post(requireAuth, controller.createMoment);

module.exports = router;
