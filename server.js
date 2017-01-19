const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:mindful-moments/db');

const config = require('./config/config.express.js');
const middleware_configuration = require('./config/middleware.express.js');

const mainRouter = require('./api/main/main.router');
const userRouter = require('./api/user/user.router');
const momentRouter = require('./api/moment/moment.router');

middleware_configuration(app);

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/write-a-moment', momentRouter);

app.get('*', function(req, res){
	res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.listen(process.env.PORT || config.express_port, () => {
	console.log(`Express server listening on ${config.express_port}`);
});
