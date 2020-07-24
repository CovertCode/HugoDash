async function deleteAuthor(req, res) {
    let low = require('lowdb')
    let FileSync = require('lowdb/adapters/FileSync');
    let adapter = new FileSync('./db.json');
    let db = low(adapter);

    let Author = req.params.author;
    console.log(`${Author}`)
    let deleteAuthor = await db.get('authors').pull(Author).write();
    console.log(deleteAuthor)
    res.redirect('/admin/setting/authors');
}

module.exports = {
    deleteAuthor
}