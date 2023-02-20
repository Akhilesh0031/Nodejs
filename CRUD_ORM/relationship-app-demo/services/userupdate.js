const models = require('../models');
const user = models.user;

exports.updateuser=async(req,res)=>{
    try{
        const {fname,lname,email} = req;
        const query=user.update({
            firstName:fname,
            lastName:lname
        },
        {
            where:{email:email},
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