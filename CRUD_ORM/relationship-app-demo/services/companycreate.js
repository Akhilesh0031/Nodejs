const models = require('../models');
const company = models.company;

exports.addcompany=async(req,res)=>{
    try{
        const {cname} = req;
        const query=company.create({
            name:cname
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