const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

const users = []
app.get('/',(req,res)=>{
    res.json("hello world")
})
app.post('/',(req,res)=>{
    console.log(req.body.user)
    users.push(req.body.user)
    res.json(req.body.user)
})
app.get("/user",(req,res)=>{
    res.json(users)
})

app.listen(PORT,()=>{
    console.log("server running");
})