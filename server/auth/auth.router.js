const router = require('express').Router();
const controller = require('./auth.controller');

router.route('/')
	.post(controller.signup);

module.exports = router;
