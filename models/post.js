const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Post extends Model{
    createdOnDate(){
        const currentDate = new Date()
        const day = currentDate.getDate()
        const month = currentDate.getMonth()
        const year = currentDate.getFullYear()
        return `${month}/${day}/${year}`
    }
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contents: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post