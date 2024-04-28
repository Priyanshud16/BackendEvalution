const {Schema,model}=require("mongoose")

const noteSchema=new Schema({
    user:{type:String,required:true},
    Books:{type:String,required:true},
    review:{type:String,required:true},
    userID:{type:String},
    username:{type:String}
},{versionKey:false})

const noteModel=model("/Note",noteSchema)

module.exports=noteModel