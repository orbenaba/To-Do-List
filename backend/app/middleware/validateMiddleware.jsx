/*export default function validateMiddleware() {
    return(req,res,next)=>{
        if(req.body.title ===""){
            return res.status(400).send({message:"You must specify a title"})
        }
        next()
    }
}*/


export default function validateMiddleware(validator) {
    return(req,res,next)=>{
        const {error} = validator(req.body)
        if(error){
            return res.status(400).send({message:"Error"});
        }
        next()
    }
    
}