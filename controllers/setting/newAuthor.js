async function addNewAuthor(req, res) {
    let low = require('lowdb')
    let FileSync = require('lowdb/adapters/FileSync');
    let adapter = new FileSync('./db.json');
    let db = low(adapter);

    let newAuthor = req.body.newAuthor;
    let addAuthor = await db.get('authors').push(newAuthor).write();
    res.send('Author Added')    
}

module.exports = {
    addNewAuthor
}