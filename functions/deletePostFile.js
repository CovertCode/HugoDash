const fs = require("fs");

function deletePostFile(req, res) {
    let filename = req.params.fileName;

    fs.copyFile(`./content/post/${filename}`, `./trash/${filename}`, (err) => {
        if (err) {
            res.send('Error in deleting post');
            return;
        }
        try {
            fs.unlinkSync(`./content/post/${filename}`);
            res.redirect('/admin/post/list');
            return;
        } catch (err) {
            res.send('Error');
            return;
        }
    });

    // try {
    //     fs.unlinkSync(`./content/post/${filename}`);
    //     res.send('Post deleted');
    // } catch(err) {
    //     console.log(err)
    // }
}

module.exports = {
    deletePostFile
};
