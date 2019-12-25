const db = require('../db');
const _ = require('lodash');

module.exports.cartAdd = (req, res) => {
    const productId = req.params.productId;
    const sessionId = _.get(req.signedCookies, 'sessionId');

    if(!sessionId){
        res.redirect('/products');
        return;
    }

    const test =  db.get("sessionIds").find(['session.id', sessionId]).value();
    
    db.get("sessionIds").find(['session.id', sessionId]).set('session.cart.'+productId, 1).write();
    res.redirect('/products');
};
