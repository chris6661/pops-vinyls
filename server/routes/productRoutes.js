const express = require('express'); 
const router = express.Router(); 

const { getAllProducts, getProductById } = require('../controller/productControllers')

//get all products from db, get form api/products, access Public
router.get('/', getAllProducts)

//get a product from db, get form api/products, access Public
router.get('/:id', getProductById)

module.exports = router; 