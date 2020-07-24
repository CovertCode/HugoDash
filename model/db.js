const Sequalize = require('sequelize');
const sqlite3 = require('sqlite3').verbose();

const sequalize = new Sequalize({
  dialect: 'sqlite',
  storage: './user.db'
});

sequalize.authenticate()
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.error('Unable to connect to DB', err);
  })

module.exports = sequalize;