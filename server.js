const express = require('express');

const app = express();

const path = require('path');

const config = require('./config/config.express.js');

const middleware_configuration = require('./config/middleware.express.js');

const mainRouter = require('./api/main/main.router');

const userRouter = require('./api/user/user.router');

middleware_configuration(app);

app.use('/', mainRouter);
app.use('/user', userRouter);

app.get('*', function(req, res){
	res.sendFile(path.resolve(__dirname, './client/index.html'));
});

app.listen(config.express_port, () => {
	console.log(`Express server listening on ${config.express_port}`);
});

// app.listen(process.env.PORT || 8080, () => {
// 	console.log('Express server listening on heroku');
// });