const router = require('express').Router();
const controller = require('./main.controller');
const passportService = require('../../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

router.route('/')
	.get(requireAuth, controller.getMain);

module.exports = router;
