
module.exports = (sequelize, dataTypes) => {
    
    const Comments = sequelize.define('Comment', {

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
        }
    },

        {
            tableName: "comments",
            timestamps: false
        }
    );

    return Comments;
}
