const signUp = require('../model/signUp.model');      //here calling table which created in model folder 

const getAllUsers = async(req, res)=>{    // getAllUsers function be exported to routes to make effects there
    try{
        console.log(req.body);
        const {name, email, password} = req.body;
        await signUp.findAll({                     // here signUp.findAll gather and get record from postgres table
            where:{                                
                id: req.params.id
            },
        },{
            name: name,
            email: email,
            password: password
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