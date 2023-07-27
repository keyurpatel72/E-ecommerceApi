const express = require('express');
const router = express.Router();
const Product = require("../models/Product");


//product create 
router.post("/create/new",async(req,res)=>{
    const newProduct =  new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)    }
})

//all get product
router.get("/",async (req,res)=>{
    const qNew =req.query.new;
    const qCategoty = req.query.category;
    try {
        let products;
        if(qnew){
            products = await Product.find().sort({createdAt:-1}).limit(1);
        }else if(qCategoty){
            products = await Product.find({
                categories: {
                    $in:[qCategoty],
                }
            })
        }else{
            products = Product.find();
        }
        req.status(200).json(products);
    } catch (error) {
        req.status(500).json(products);
    }
})



module.exports = router