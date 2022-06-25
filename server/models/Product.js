const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title:{
        type:String
    },
    categoryId:{
        type: String,
        required: true,
    },
    desc:{
        type:String,
    },
},
  { timestamps: true }
)

module.exports = mongoose.model("Product",
ProductSchema)
