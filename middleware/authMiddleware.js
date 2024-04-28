const jwt=require("jsonwebtoken")

const auth=async(req,res,next)=>{
    const token= req.headers.authorization?.split(" ")[1]

    
    if(token){
        jwt.verify(token,'masai',function(err,decoded){
            req.body.userID=decoded.userID
    req.body.username=decoded.user
            console.log(decoded)
            next()
        })
    }else{
        res.status(404).json({message:"Token is not found"})
    }
}

module.exports=auth