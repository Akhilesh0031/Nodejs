const models =require('../models');
const user = models.user;


exports.displayuser=async(req,res)=>{
    try{
        const query = user.findAll({
            attributes:['firstName','lastName','email']
        }).catch((err) => {
            if(err){
                console.log(err);
            }
        });
        return query;
    }catch(err){
        throw err;
    }
}