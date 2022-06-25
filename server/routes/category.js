const express=require("express")
const router = express.Router();
const Category=require("../models/Category")

router.post("/",async(req,res)=>{
    const newCategory=new Category(req.body)
    try {
        const saveCategory=await newCategory.save()
        res.status(200).json(saveCategory)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put("/:id",async(req,res)=>{
    try {      
        const category=await Category.findById(req.params.id)
        if(category.userId === req.body.userId){
            await category.updateOne({$set:req.body})
            res.status(200).json("Your category has been updated")
        }
        else{
            res.status(403).json("You cannot update this category")
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const category=await Category.findById(req.params.id)
        if(category.userId === req.body.userId){
            await category.deleteOne()
            res.status(200).json("category has been deleted")
        }
        else{
            res.status(403).send("You can Not delete this category")
        }
    } catch (error) {
        res.status(500).send(error)
    }
})


router.get("/fetchall/:id",async(req,res)=>{
    try {   
        const category=await Category.find({userId:req.params.id})
        res.json(category)
    } catch (error) {
        res.status(500).send("some internal error occured");
    }
})
module.exports = router;