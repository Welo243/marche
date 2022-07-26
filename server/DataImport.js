import express from "express"; 
import products from "./Data/Products.js";
import users from "./Data/users.js"; 
import Product from "./Models/Product.js";
import User from "./Models/UserModel.js";
import asyncHandler from "express-async-handler";


const ImportData = express.Router()


ImportData.post("/user", asyncHandler(
    async(req,res)=>{
        await User.remove({})
    
        const importUser = await User.insertMany(users)
        res.send({importUser});
    }
));

ImportData.post("/", asyncHandler(
    async(req,res)=>{
    await Product.remove({})

    const importProduct = await Product.insertMany(products)
    res.send({importProduct});
}
));




export default ImportData;
