const express = require("express");
const app=express();
const PORT=3000;
const userRouter=require("./routes/user");

//app.use(express.static("public"));

app.set("view engine","ejs");
//ミドルウェアは一番上に宣言
app.use(mylogger);

app.get("/",(req,res)=>{
    res.render("index",{text:"Node.js"})
})



//ルーティング
app.use("/user",userRouter);



//ミドルウェア
function mylogger(req,res,next){
    console.log(req.originalUrl);
    next();
}



app.listen(PORT,()=> console.log("サーバが起動しました"));

