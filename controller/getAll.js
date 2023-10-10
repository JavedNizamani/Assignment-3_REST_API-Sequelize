
var db = require('../utils/db.tables');
var signUp = db.signUp;
const getAllUsers = async(req, res)=>{    // getAllUsers function be exported to routes to make effects there
    try{
        console.log(req.body);
        await signUp.findAll({                     // here signUp.findAll gather and get record from postgres table
            where:{                                
                id: req.params.id
            },
        }).then((result)=>{
            res.status(201).send(result);
        })
    }catch(error){
        console.error(error.stack);
    }
}
module.exports = {
    getAllUsers
}