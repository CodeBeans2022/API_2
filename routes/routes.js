// import express
// import express from "express";
const express = require("express");
const path = require('path');
// import function from controller
// import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";
const productController = require("../controllers/product.js")
  
// init express router
const router = express.Router();

router.get('/', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'))
})
// Get All Product
router.get('/products', productController.showProducts);
  
// Get Single Product
router.get('/products/:id', productController.showProductById);
  
// Create New Product
router.post('/products', productController.createProduct);
  
// Update Product
router.put('/products/:id', productController.updateProduct);
  
// Delete Product
router.delete('/products/:id', productController.deleteProduct);
  
// export default router
// export default router;
module.exports = router;