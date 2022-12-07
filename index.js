const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.get('/',(req,res)=>{
    res.json("hello world")
})


app.listen(PORT,()=>{
    console.log("server running");
})