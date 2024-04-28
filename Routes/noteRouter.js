const {Router}=require("express")
const noteModel = require("../model/noteModel")
const auth = require("../middleware/authMiddleware")

const noteRouter=Router()

noteRouter.post("/create",auth,async(req,res)=>{
    const {user,Books,review,userID,username}=req.body

    try {
        const note=new noteModel({user,Books,review,userID,username})
         await note.save()
         res.status(201).json({message:"Note Created Sucessfully"})
    } catch (error) {
        res.status(404).json({message:"Something Wents Wrong"})
    }
})

noteRouter.get("/",auth,async(req,res)=>{
    const {userID}=req.body
    try {
        const note=await noteModel.find({userID})
        res.status(201).json({message:"All notes are here",note})
    } catch (error) {
        res.status(404).json({message:"Something Wents Wrong while geting notes"})
    }
})

noteRouter.patch("/update/:id",auth,async(req,res)=>{
    const {id}=req.params
    try {
        await noteModel.findByIdAndUpdate({_id:id},req.body)
        res.status(201).json({message:"Note are Updated"})

    } catch (error) {
        res.status(404).json({message:"Something Wents Wrong while updating notes"})
    }
})

noteRouter.delete("/delete/:id",auth,async(req,res)=>{
    const {id}=req.params
    try {
        await noteModel.findByIdAndDelete({_id:id},req.body)
        res.status(201).json({message:"Note are Deleted"})

    } catch (error) {
        res.status(404).json({message:"Something Wents Wrong while Deleted notes"})
    }
})

module.exports=noteRouter