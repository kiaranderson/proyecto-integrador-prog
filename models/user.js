const {Sequelize, DataTypes} = require("sequelize")

const sequelize = new Sequelize("proyecto", "root", "root", {
    dialect: "mysql",
    host: "localhost",
    port: 8889
})

sequelize.authenticate().then(() => {
    console.log("DB connected succesfully")
}).catch((e) => {
    console.log("Failed to connect DB")
    console.log(e)
})

const User = sequelize.define("User", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        products: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // TODO: Agregar el resto de las columnas
    }, 
    {
        tablename: "users",
        timestamps: false,
    }
)

module.exports = { User }