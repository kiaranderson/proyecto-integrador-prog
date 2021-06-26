module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define('User', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false
        },
        pass: {
            type: dataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: "users",
    });

    return User;
}