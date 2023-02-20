const models = require('../models');
const user = models.user;
exports.uploadPhoto = async(req,res,imgpaths)=>{
    try{
        const query1 = user.update(
            {
                "userPhoto": imgpaths[0],
            },
            {
                where:{id:1},
            }
        );
        return query1;
    }catch(err){
        throw err;
    }
};