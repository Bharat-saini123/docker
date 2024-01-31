import express from "express";

const port=process.env.PORT||8000;

const app=express();


app.get("/",(req,res)=>{
    res.send(" yes boss");
});


app.listen(port,()=>{
    console.log(`server start at the port of ${port}`);
});