import express from "express"; 
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js"; 
import ProductRoute from "./Routes/ProductRoute.js";
import { errorHandler, notFound } from "./middleware/Errors.js";
import userRoute from "./Routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();

app.use(express.json());

// Api 
app.use("/api/import",ImportData);
app.use("/api/products",ProductRoute);
app.use("/api/users/",userRoute);


// ERROR 
app.use(notFound);
app.use(errorHandler);

{/* 

app.get("/api/products",(req,res)=>{
    res.json(products);
});

*/}


 

{/*

app.get("/",(req, res)=>{
    res.send("API IS RUNNING....")
});

*/
}



const PORT = process.env.PORT || 1000
app.listen(PORT, console.log(`server run in port ${PORT}`));