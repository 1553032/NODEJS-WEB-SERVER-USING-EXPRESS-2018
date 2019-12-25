const express = require('express');
const controller = require('../controllers/products.controller');
const router = express.Router();

router.get('/', controller.index);

router.get('/:page', controller.index);

module.exports = router;