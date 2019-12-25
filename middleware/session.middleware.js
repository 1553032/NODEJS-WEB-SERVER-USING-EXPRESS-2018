const _ = require('lodash');
const shortid = require('shortid');
const db = require('../db');

module.exports = (req, res, next) => {
	let sessionId = _.get(req.signedCookies, 'sessionId');

	if (!sessionId) {
		sessionId = shortid.generate();

		res.cookie('sessionId', sessionId, {
			signed: true
		});

		db.get('sessionIds').push({
			session: {
				id: sessionId,
				cart: {}
			}
		}).write();
	}

	next();
};
