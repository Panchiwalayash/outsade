const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    require: true
  },
  userId: {
    type: String,
    required: true,
  },
  desc: {
    type: String
  }
},
  { timestamps: true }
)

module.exports = mongoose.model("Category",
  CategorySchema)
