module.exports = function (sequelize, dataTypes) {
    let alias = "User"

    let cols = {

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
        },

    }
    let config = {
        tableName: "users",
        timestamps: false,

    }

    const User = sequelize.define(alias, cols, config)
    return User

}