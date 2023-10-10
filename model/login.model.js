module.exports = (sequelize, Sequelize, Model)=>{

    class logIn extends Model{}

    logIn.init({
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: 'Log-In',
        timestamps: false,
    });
}