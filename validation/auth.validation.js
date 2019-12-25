const db = require('../db');

module.exports.authLogin = (req, res, next) => {
    const userId = req.signedCookies.userId;

	if (!userId) {
		res.redirect('/auth/login');
		return;
    }
    
    const user = db.get('students').value().find(student => student.id === userId);

    if(!user){
        res.clearCookie('sessionId');
        res.redirect('/auth/login');
        return;
    }

    res.locals.user = user;
    next();
};
