const aiService=require("../services/ai.service")


module.exports.getReview=async (req,res)=>{

    const code=req.body.code;
    if(!code){
    return res.status(400).send("code not found");
    }
    console.log("code received:", code);

    const response= await aiService(code)

    res.send(response)
}