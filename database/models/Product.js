
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
        createdAt: {
            type: dataTypes.DATE,
            field: "create_dat"
        },
        updatedAt: {
            type: dataTypes.DATE,
            field: "update_dat"
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