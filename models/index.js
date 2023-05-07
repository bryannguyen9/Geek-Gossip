const User = require('./user');
const Post = require('./post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, { //might have to edit belongsTo to hasOne
  foreignKey: 'user_id'
});

module.exports = { User, Post };