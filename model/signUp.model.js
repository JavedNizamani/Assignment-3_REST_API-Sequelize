module.exports = (sequelize, Sequelize)=>{

    const signUp = sequelize.define('sign-up',{             //this creates sign-up table in postgres database
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull : false
        },
        repeatPassword: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        tableName: 'sign-up',
        timestamps: false
    });
}

