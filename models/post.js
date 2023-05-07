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
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateCreated: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
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