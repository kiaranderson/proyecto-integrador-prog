
module.exports = function (sequelize,dataTypes) {
    let alias= "Product"

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        product_name: {
            type: dataTypes.STRING,
            
        },

       image_url : {
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


    }

 let config = {
     tableName: "products",
     timestamps: true, 
     
 }

 const Product = sequelize.define(alias,cols,config)
 return Product

}
