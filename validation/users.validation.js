module.exports.postCreate = (req, res, next) => {
	
	const data = req.body;
	let path
	const errors = [];
	if(req.file){
		path = req.file.path.split("\\").slice(1).join("/");
	}
	req.body.file = path;

	if (!data.name) {
		errors.push('Name is Empty !');
	}

	if (!data.id) {
		errors.push('ID is empty');
	}

	if (errors.length) {
		res.render('create', {
			errors: errors,
			values: data
		});
		return;
    }
    next();
}