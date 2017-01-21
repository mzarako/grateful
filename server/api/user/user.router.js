const router = require('express').Router();
const controller = require('./user.controller');

router.route('/')
	// .post(controller.signup);
	// .get(controller.signup)
	// .delete(controller.signup);

// router.route('/:name')
// 	.post(controller.postLetterList)
// 	.put(controller.putUpdatedList);

module.exports = router;
