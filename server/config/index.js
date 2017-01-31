import secrect from './secret';

var configuration = {
	express_port: 3090,
	mogodb: {
		url: 'mongodb://localhost:mindful-moments/devData'
	},
	secret: process.env.SECRET_API_KEY || secret
}

module.exports = configuration;
