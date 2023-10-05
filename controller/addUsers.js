const signUp = require('../model/signUp.model');          //here calling table which created in model folder 

const createUsers = async (req, res)=>{     // here createUsers function will be exported and be used in routes
    try{                                    // making effects at routes 
        console.log(req.body);
        const {name, email, password} = req.body;

        await signUp.create({         // here signUp.create function add values to table created in postgres
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
    createUsers
}