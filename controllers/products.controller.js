// const db = require('../db');
const Product = require('../models/product.model');

module.exports.index = async (req, res) => {
    // const page = parseInt(req.params.page) || 1;
    // const perPage = 8;
    
    // const startPage = (page - 1) * perPage;
    // // const endPage = page * perPage;

    // const products = db.get("products").drop(startPage).take(perPage).value();

    // res.render("product/index", {
    //     products: products
    // });
    const products = await Product.find();
    res.render("product/index", {
        products: products
    });
}