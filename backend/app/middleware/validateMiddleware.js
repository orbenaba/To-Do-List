export default function validateMiddleware() {
    return(req,res,next)=>{
        if(req.body.title ===""){
            return res.status(400).send({message:"You must specify a title"})
        }
        next()
    }
    
}