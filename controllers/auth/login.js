

// Need to run on empty json file
// db.defaults({ posts: [], users: [], authors: [] })
//   .write()

async function login(req, res) {
    let jwt = require("jsonwebtoken");
    let bcrypt = require('bcrypt');
    let low = require('lowdb')
    let FileSync = require('lowdb/adapters/FileSync')
    let adapter = new FileSync('./db.json')
    let db = low(adapter)

    let { username, password } = req.body;
   
    let User = await db.get('users').find({
        username: username,
    }).value()

    if (!User) return res.redirect('/admin/login');
    let hashPassword = await bcrypt.compare(password, User.password);
    if (!hashPassword) return res.redirect('/admin/login');
    if (User.status == 'active') {
        const token = jwt.sign({ _id: User.username }, 'SOMEsecTET');
        res.cookie("auth_token", token, { maxAge: 900000, httpOnly: true });
        res.redirect('/admin')
    }

}

module.exports = {
    login
}