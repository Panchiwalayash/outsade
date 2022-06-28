const mongoose=require("mongoose");
const mongoURL=process.env.DB

const connectToMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("connected to mongodb");
    })
}

module.exports=connectToMongo;