const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

const Product = mongoose.model('Product', ProductSchema, 'products');

module.exports = Product;