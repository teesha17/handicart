const express = require('express');
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try{
       
        res.send([global.food_items,global.food_collection])
    }catch(error){
        console.log(error.message);
        res.send("server error");
    }
})



module.exports=router;