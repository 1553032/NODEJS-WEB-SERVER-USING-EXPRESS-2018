const User = require('../models/user.model');

module.exports.index = async (req, res) => {
	const students = await User.find();

	res.render('index', { students: students });
};

module.exports.test = (req, res) => {
	// res.cookie('session-id', 12345);
	res.clearCookie('session-id');
	res.send('Cookie has set');
};

module.exports.getDetail = async (req, res) => {
	const id = req.params.studentID;
	const foundStudent = await User.findById(id);
	res.render('detail', { student: foundStudent });
};

module.exports.search = async (req, res) => {
	const data = req.query;
	const name = data.name;
	const foundStudents = await User.find({
		name: {
			$regex: name
		}
	})
	res.render('index', { students: foundStudents, searchPara: name });
};

module.exports.create = (req, res) => {
	// console.log(req.cookies);
	res.render('create');
};

module.exports.postCreate = async (req, res) => {
	const data = req.body;
	await User.create({name: data.name, avatar: data.file});
	res.redirect('/');
};
