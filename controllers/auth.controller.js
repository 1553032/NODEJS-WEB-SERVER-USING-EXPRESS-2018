const db = require('../db');
const _ = require('lodash');

module.exports.login = (req, res) => {
	res.render('auth/login');
};

module.exports.postLogin = (req, res) => {
	const data = req.body;
	const user = db.get('students').value().find((student) => student.email === data.email);

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

	res.cookie('userId', user.id);
	res.redirect('/users');
};
