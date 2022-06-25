const express=require("express")
const router = express.Router();
const Product=require("../models/Product");

router.get("/:id",async(req,res)=>{
    try {
        const product=await Product.find({categoryId:req.params.id})
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send("some thing wrong")
    }
})
router.post("/",async(req,res)=>{
    try {
        const newProduct=new Product(req.body)
        const saveProduct=await newProduct.save()
        res.status(200).json(saveProduct)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put("/:id",async(req,res)=>{
    try {      
        const product=await Product.findById(req.params.id)
            await product.updateOne({$set:req.body})
            res.status(200).json("Your product has been updated")
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id)
            await product.deleteOne()
            res.status(200).json("product has been deleted")
        
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;
