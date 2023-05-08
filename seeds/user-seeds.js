const { User } = require('../models');

const userData =
[
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12345",
      "github": "github.com/sal"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345",
      "github": "github.com/lernantino"
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12345",
      "github": "github.com/amiko"
    },
    {
      "name": "Jordan",
      "email": "jordan99@msn.com",
      "password": "password12345",
      "github": "github.com/jordan"
    },
    {
      "name": "Blake",
      "email": "the_blake@yahoo.com",
      "password": "password12345",
      "github": "github.com/blake"
    }
    {
      "name": "Bryan",
      "email": "bryannguyen9@yahoo.com",
      "password": "password12345",
      "github": "github.com/bryannguyen9"
    }
  ]

  const seedUsers = () => User.bulkCreate(userData);
  module.exports = seedUsers;
  