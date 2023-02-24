// import connection
// import db from "../config/database.js";
const connection = require("../config/database.js");

// Get All Products
const getProducts = (result) => {
    connection.query("select * from products", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Product
const getProductById = (id, result) => {
    connection.query("select * from products where productID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Product to Database
const insertProduct = (data, result) => {
    connection.query("insert into products set ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Product to Database
const updateProductById = (data, id, result) => {
    connection.query("update products set productName = ?, productPrice = ? where productID = ?", [data.productName, data.productPrice, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Product to Database
const deleteProductById = (id, result) => {
    connection.query("delete from products where productID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

module.exports = {getProducts, getProductById, insertProduct, updateProductById, deleteProductById};
