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
        timestamps: true, 
    });

   return Product;
 }