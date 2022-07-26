import express from "express"; 
import asyncHandler from "express-async-handler";
import Product from "../Models/Product.js";

const ProductRoute = express.Router();

// GET ALL PRODUCT
ProductRoute.get("/", asyncHandler(
    async(req, res) =>{
        const products = await Product.find({})
        res.json(products)
    }
));

ProductRoute.get("/:id", asyncHandler(async (req, res) =>{
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product)
        } else {
            res.status(404);
            throw new Error("Product not Found");
        }
      
    }
));

export default ProductRoute;