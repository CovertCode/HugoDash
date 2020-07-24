async function deleteUser(req, res) {
    let low = require('lowdb');
    let FileSync = require('lowdb/adapters/FileSync');
    let adapter = new FileSync('./db.json');
    let db = low(adapter);

    let username= req.params.username;
    
    let addUser = await db.get('users').remove(
        {
            "username": username,
        }
    ).write();
    console.log(addUser)
    res.redirect('/admin/setting/users/list')
};
module.exports = {
    deleteUser
}