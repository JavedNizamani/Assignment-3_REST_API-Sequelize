module.exports = (sequelize, Sequelize)=>{

    const signUp = sequelize.define('sign-up',{             //this creates sign-up table in postgres database
        id: {                                               
            type: Sequelize.INTEGER,                         
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull : false
        }
    },{
        tableName: 'sign-up',
        timestamps: false
    });
}

