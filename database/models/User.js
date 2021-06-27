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
        nacimiento: {
            type: dataTypes.STRING,
            allowNull: false
        },

        pp: {
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

    User.associate = (db) => {
        User.hasMany(db.Product, {
            as: 'usuario',
            foreignKey: 'user_id'
        });

        User.hasMany(db.Comment, {
            as: 'owner',
            foreignKey: 'user_id'
        });
    };

    return User;
}