

async function newPostForm(req,res) {
    let low = require('lowdb')
    let FileSync = require('lowdb/adapters/FileSync');
    let adapter = new FileSync('./db.json');
    let db = low(adapter);

    let authors = await db.get('authors').value();
        res.render('dash/newPost', {
            authors
        })
}

module.exports = {
    newPostForm
}