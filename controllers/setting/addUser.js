async function addUser(req, res) {
    let low = require('lowdb');
    let bcrypt = require('bcrypt');
    let FileSync = require('lowdb/adapters/FileSync');
    let adapter = new FileSync('./db.json');
    let db = low(adapter);

    let { username, password } = req.body;
    let hashPassword = await bcrypt.hash(password,8);
    
    let addUser = await db.get('users').push(
        {
            "username": username,
            "password": hashPassword,
            "status": "active"
        }
    ).write();
    console.log(addUser)
    res.redirect('/admin/setting/users/list')
};
module.exports = {
    addUser
}