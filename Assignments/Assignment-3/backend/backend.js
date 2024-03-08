const express = require('express');
const { crud } = require('./mongodb');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

app.get("/read",async function(req,res){
    const allData = await crud.find({})
    res.json({
    allData
})    
})

app.post("/create", async function(req,res){
    const name = req.body.name;
    const age=req.body.age;
    
    
    await crud.create({
        name:name,
        age:age,
    })
    res.json({
        msg:"New Entry Created"
    })
})

app.put("/update", async function(req,res){
    const _id=req.query._id;
    console.log(_id);
    console.log(req.body.name);

    await crud.updateOne({
        _id:_id,
    },{
        name:req.body.name,
        age:req.body.age,
    })
    res.json({
        msg:"Updated Details"
    })
})

app.delete("/delete",async function(req,res){
    const _id=req.query._id;

    await crud.deleteOne({
        _id:_id,
    })
    res.json({
        msg:"Entry Deleted"
    })

})


app.listen(3000);