const Sequalize = require('sequelize');
const sequalize = require('./db');

const User = sequalize.define('users', {
    email: {
        type: Sequalize.STRING,
        allowNull: false
    },
    name: {
        type: Sequalize.STRING,
        allowNull: false
    },
    password: {
        type: Sequalize.STRING,
        allowNull: false
    }
});

module.exports = User;
