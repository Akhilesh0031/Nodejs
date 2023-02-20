const router=require('express').Router();
const con = require('../db_connect');
const delete1 =require("../services/deletequery");
const insert1 =require("../services/insertquery");
const update1 =require("../services/updatequery");
const select1 =require("../services/retrivequery");


router.post('/insert',async(req,res)=>{
    try{
        const result=await insert1.insertQuery(req.body);
        console.log(result);
        res.json(result);
    

    }catch(err){
        res.status(406).send({
            msg: "something went wrong please try again",
            err:err
        })
    }
})

router.post('/update',async(req,res)=>{
    try{
        const result=await update1.updateQuery(req.body);
        console.log(result);
        res.json(result);
    

    }catch(err){
        res.status(406).send({
            msg: "something went wrong please try again",
            err:err
        })
    }
})

router.post('/retrive',async(req,res)=>{
    try{
        const result=await select1.selectQuery(req.body);
        console.log(result);
        res.json(result);
    

    }catch(err){
        res.status(406).send({
            msg: "something went wrong please try again",
            err:err
        })
    }
})

router.post('/delete',async(req,res)=>{
    try{
        const result=await delete1.deleteQuery(req.body);
        console.log(result);
        res.json(result);
    

    }catch(err){
        res.status(406).send({
            msg: "something went wrong please try again",
            err:err
        })
    }
})



module.exports=router;