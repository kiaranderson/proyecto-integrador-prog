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
    },{
        tableName: "products",
    });

    Product.associate = (db) => {
        Product.belongsTo(db.User, {
            as: 'productos',
            foreignKey: 'user_id'
        });

        Product.hasMany(db.Comment, {
            as: 'prodcom',
            foreignKey: 'product_id'
        });
    };

   return Product;
 }