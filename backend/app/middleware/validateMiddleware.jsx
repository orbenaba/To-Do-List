export default function validateMiddleware(validator) {
    return(req,res,next)=>{
        console.log("req.body=",req.body);
        const {error} = validator(req.body);
        if(error){
        console.log("error = ",error);
            return res.status(400).send({message:"Error"});
        }
        next()
    }
    
}