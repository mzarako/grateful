let Controller = {
	getTestResponse: (req, res) => {
    const stuff = req.body.stuff + ' is brown.';
    console.log(req.body);
		res.status(200).json(stuff);
	}
};

module.exports = Controller;
