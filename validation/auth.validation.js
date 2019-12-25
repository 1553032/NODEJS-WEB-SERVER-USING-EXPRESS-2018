const User = require('../models/user.model');

module.exports.authLogin = (req, res, next) => {
    const userId = req.signedCookies.userId;
    console.log(req.signedCookies);

	if (!userId) {
        console.log("Failed");
		res.redirect('/auth/login');
		return;
    }
    
    console.log('UserID:', userId)
    const user = User.findById(userId);

    if(!user){
        res.clearCookie('sessionId');
        res.redirect('/auth/login');
        return;
    }

    res.locals.user = user;
    next();
};
