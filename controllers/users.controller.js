const db = require('../db');

module.exports.index = (req, res) => {
	const students = db.get('students').value()
	
	res.render('index', { students: students });
};

module.exports.test = (req, res) => {
	// res.cookie('session-id', 12345);
	res.clearCookie('session-id');
	res.send('Cookie has set');
};

module.exports.getDetail = (req, res) => {
	const id = req.params.studentID;
	const students = db.get('students').value();
	const foundStudent = students.find((student) => student.id === id);
	res.render('detail', { student: foundStudent });
};

module.exports.search = (req, res) => {
	const data = req.query;
	const name = data.name;
	const students = db.get('students').value();
	const foundStudents = students.filter((student) => student.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
	res.render('index', { students: foundStudents, searchPara: name });
};

module.exports.create = (req, res) => {
	// console.log(req.cookies);
	res.render('create');
};

module.exports.postCreate = (req, res) => {
	const data = req.body;
	db.get('students').push({ name: data.name, id: data.id, path: data.file }).write();
	res.redirect('/');
};
