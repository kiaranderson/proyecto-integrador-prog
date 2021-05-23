
module.exports = function (sequelize,dataTypes) {
    let alias= "Comment"

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        commentary: {
            type: dataTypes.STRING(400),
        },


        user_id: {
            type: dataTypes.INTEGER,
        },
        
        products_id: {
            type: dataTypes.INTEGER,
            
        },

    }


 let config = {
     tableName: "comments",
     timestamps: false, 
     
 }

 const Comment = sequelize.define(alias,cols,config)
 return Comment
}
