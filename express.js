const express =require("express")

const app =express();

app.get('/',(req,res)=>{

    res.send("this is get method")


})

app.post('/',(req,res)=>{

    res.send("this is post method")


})


app.listen(3000,()=>{
    console.log("listen on port 3000")


})