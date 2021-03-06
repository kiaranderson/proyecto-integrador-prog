
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
        product_id: {
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
        tableName: "comments",
    });

    Comments.associate = (db) => {
        Comments.belongsTo(db.User, {
            as: 'comentarios',
            foreignKey: 'user_id'
        });

        Comments.belongsTo(db.Product, {
            as: 'comments',
            foreignKey: 'product_id'
        });
    };

    return Comments;
}
