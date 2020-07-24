const jwt = require("jsonwebtoken");

async function verify(req, res, next) {

    let token = req.cookies.auth_token;

    if (!token) {
        return res.redirect('/admin/login');
    }

    try {
        let verifyToken = jwt.verify(token, 'SOMEsecTET');
        req.user = verifyToken;
        next();
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    verify
}