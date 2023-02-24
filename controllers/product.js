const productModel = require("../models/productModel.js");

// get all products
const showProducts = (req, res) => {
    productModel.getProducts((err, results) => {
        if (err) {
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single products
const showProductById = (req, res) => {
    productModel.getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// create new product
const createProduct = (req, res) => {
    const data = req.body;
    productModel.insertProduct(data, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// update product
const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    productModel.updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// delete product
const deleteProduct = (req, res) => {
    const id = req.params.id;
    productModel.deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

module.exports = {showProducts, showProductById, createProduct, updateProduct, deleteProduct};