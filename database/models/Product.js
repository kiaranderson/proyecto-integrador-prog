const { Sequelize } = require(".");

module.exports = (sequelize,dataTypes) => {

    const Product = sequelize.define('Product', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: dataTypes.STRING,
        },
        image_url: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING(400),
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
    },{
        tableName: "products",
    });

    Product.associate = (models)=> { //relacion de 1 a muchos
        Product.belongsTo(models.User, {
            as: 'Usuario',
            foreignKey: 'user_id',
        }),
        Product.hasMany(models.Comment, {
            as: 'Comentarios',
            foreignKey: 'product_id',
        })

    }

   return Product;
 }