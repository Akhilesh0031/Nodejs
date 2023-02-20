const models = require('../models');
const user = models.user;
// const bcrypt = require('bcrypt');
// const saltRounds =10;

exports.adduser=async(req,res)=>{
    try{
        const {email,fname,lname} = req;
        //console.log("string-------------",req)
        // hash = await bcrypt.hash(temppass,saltRounds);
        const query=user.create({
            email:email,
            firstName:fname,
            lastName:lname
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
        return query;
    
        
    }catch(err){
        throw err;
    }
}