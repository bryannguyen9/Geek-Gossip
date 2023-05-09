const { User } = require('../models');

const userData = [
    {
        username: "bryannguyen9",
        twitter: "twitter.com/bryannguyen9",
        github: "github.com/bryannguyen9",
        email: "bryannguyen9@yahoo.com",
        password: "password123"
    },
    {
        username: "davidvo",
        twitter: "twitter.com/daevidvo",
        github: "github.com/daevidvo",
        email: "daevidvo@gmail.com",
        password: "password123"
    },
    {
        username: "davidchung",
        twitter: "twitter.com/davidchung",
        github: "github.com/davidchung",
        email: "dchung13@gmail.com",
        password: "password123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;