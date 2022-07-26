import mongoose from "mongoose";

const reviewSchema  = mongoose.Schema({

    name: { type: String, required: true},
    rating: { type: Number, required: true },
    comment: { type: String, required: true},

    user:{
      type:mongoose.Schema.Types.ObjectId,
      require:true,
      ref:"User",
    }
})

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    image: { type: String, require: true },
    description: { type: String, require: true },
    reviews:[reviewSchema],
    rating: { type: Number,require:true, default:0},
    numReviews: { type: Number,require:true,default:0 },
    price: { type: Number, required: true,default:0 },
    countinstock: { type: Number, require: true,default:0},
    
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;