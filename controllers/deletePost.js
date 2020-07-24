const fs = require("fs");
const path = require("path");

async function deletePost(req, res) {
  var ListofPosts = [];

  console.log("** Post List **");
  var filesList = fs.readdirSync("./content/post");

  await filesList.map(async (file) => {
    if(file.indexOf(".html") == -1) {
      // await filesList.pop(file)
      // do noting
    } else {
      await ListofPosts.push(file)
    }
  });

  console.log(ListofPosts)
  res.redirect('/admin/post/list');
}

module.exports = {
    deletePost
};
