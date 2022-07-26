import mongoose from "mongoose"

const connectDatabase = async() =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log("Mongo Connected");

    } catch (error) {
        
    }
}

export default connectDatabase;