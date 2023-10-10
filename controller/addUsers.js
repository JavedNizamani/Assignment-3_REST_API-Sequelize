var  db = require('../utils/db.tables');
var signUp = db.signUp;
const createUsers = async (req, res)=>{     // here createUsers function will be exported and be used in routes
    try{                                    // making effects at routes 
        console.log(req.body);
        const {firstname, lastname, email, username, password, repeatPassword} = req.body;

        await signUp.create({         // here signUp.create function add values to table created in postgres
           firstname: firstname,
           lastname: lastname,
           email: email,
           username: username,
           password: password,
           repeatPassword: repeatPassword
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