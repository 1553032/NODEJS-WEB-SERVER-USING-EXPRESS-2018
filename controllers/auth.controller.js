const User = require('../models/user.model');
const _ = require('lodash');

module.exports.login = (req, res) => {
	res.render('auth/login');
};

module.exports.postLogin = async(req, res) => {
	const data = req.body;
	const user = await User.findOne({email: data.email});

	if (!user) {
		res.render('auth/login', {
			error: 'User not exists',
			values: data
		});
		return;
	}

	if (user.password !== data.password) {
		res.render('auth/login', {
			error: 'Wrong Password',
			values: data
		});
		return;
	}

	res.cookie('userId', user._id,{
		signed: true
	});
	res.redirect('/users');
};
