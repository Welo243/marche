import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      require:true,
      ref:"User",
    },

    orderItems:[{

      name:{type:String, required:true},
      qty:{type:Number, required:true},
      image:{type:String,required:true},
      price:{type:Number, required:true},
      product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Product",
      },

    },],
    shippingAdress:{
      address:{type:String,required:true},
      city:{type:String, required:true},
      postalcode:{type:String, required:true},
      country:{type:String,required:true},
    },

    paymentMethod:{
      type:String,
      required:true,
      defaul:"Paypal",
    },
    paymetResult:{
    id:{type:String},
    status:{type:String},
    update_time:{type:String},
    email_address:{type:String},
    },
    taxprice: { type: Number, required: true, default:0.0},
    Shippingprice: { type: Number, required: true, default:0.0},
    totalprice: { type: Number, required: true, default:0.0},
    isPaid: { type: Boolean, required: true, default:false},
    paidAt: { type: Date},
    isDelivered: { type: Boolean, required: true, default:false},
    Delivered: {Date}, 
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
