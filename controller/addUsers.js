const signUp = require('../model/signUp.model');

const createUsers = async (req, res)=>{
    try{
        console.log(req.body);
        const {name, email, password} = req.body;

        await signUp.create({
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