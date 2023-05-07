const User = require('./user');
const Post = require('./post');

User.hasMany(Post);

Post.hasOne(User);

module.exports = { User, Post };