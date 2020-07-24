async function userList(req, res) {
    let low = require('lowdb')
    let FileSync = require('lowdb/adapters/FileSync');
    let adapter = new FileSync('./db.json');
    let db = low(adapter);

    let Users = await db.get('users').value();

    res.render('setting/Users', {
        Users
    });
    
};
module.exports = {
    userList
}