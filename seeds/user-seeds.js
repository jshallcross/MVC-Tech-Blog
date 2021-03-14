const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
    {
        username: "jon19",
        email: "jon@jon.com",
        password: "password"
    },
    {
        username: "ethan05",
        email: "ethan@ethan.com",
        password: "password"
    },
    {
        username: "jax28",
        email: "jax@jax.com",
        password: "password"
    },
]



const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;