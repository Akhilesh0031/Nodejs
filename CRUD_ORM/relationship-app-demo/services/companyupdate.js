const models = require('../models');
const company = models.company;

exports.updatecompany= async (req,res) => {
    try{
        const {cname,cid}=req
        const query= company.update({
            name:cname
        },
        {
            where:{id:cid},
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
        return query;
    }
    catch(err){
        throw err;
    }
};