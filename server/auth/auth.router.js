const router = require('express').Router();
const controller = require('./auth.controller');
const passportService = require('../services/passport');
const passport = require('passport');

// const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

router.route('/signup')
	.post(controller.signup);

router.route('/login')
	.post(requireLogin, controller.login);

module.exports = router;
