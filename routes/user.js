const express=require("express");
const router=express.Router();




router.get("/",(req,res)=>{
    console.log("ユーザです");
    res.send("ユーザです");
});
router.get("/info",(req,res)=>{
    console.log("ユーザ情報です");
    res.send("ユーザ情報です");
})


router.get("/:id",(req,res)=>{
    res.send(req.params.id+"のユーザ情報を取得");
});
module.exports=router;