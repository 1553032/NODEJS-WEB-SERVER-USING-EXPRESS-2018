const express = require('express');
const db = require('../db');
const controller = require('../controllers/cart.controller');
const router = express.Router();

router.get('/:productId', controller.cartAdd);

module.exports = router;
