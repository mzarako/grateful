const router = require('express').Router();
const controller = require('./moment.controller');

router.route('/')
	.get(controller.getTestResponse);

router.route('/')
	.post(controller.getTestResponse);

module.exports = router;
