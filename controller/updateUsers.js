// const signUp = require('../model/signUp.model');      //here calling table which created in model folder

var db = require('../utils/db.tables');
var signUp = db.signUp;
const updateSignUp = async (req, res)=>{     
    try{                          // updateSignUp function be exported to routes to make effects at routes
        console.log(req.body);
        const {firstname, lastname, email, username, password, repeatPassword} = req.body;

            await signUp.update(                // here signUp.update get record update in database table
                {
                firstname: firstname,
                lastname: lastname,
                email: email,
                username: username,
                password: password,
                repeatPassword: repeatPassword

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