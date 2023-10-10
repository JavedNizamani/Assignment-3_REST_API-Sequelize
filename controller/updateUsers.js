// const signUp = require('../model/signUp.model');      //here calling table which created in model folder

var db = require('../utils/db.tables');
var signUp = db.signUp;
const updateSignUp = async (req, res)=>{     
    try{                          // updateSignUp function be exported to routes to make effects at routes
        console.log(req.body);
        const {id, name, email, password} = req.body;

            await signUp.update(                // here signUp.update get record update in database table
                {
                name: name,
                email: email,
                password: password
            },
            {
                where: {
                    id: req.params.id
                },
            }).then((result)=>{
                res.status(201).send(result);
            });

    }catch(error){
        console.error(error.stack);
    }
}
module.exports = {
    updateSignUp
}