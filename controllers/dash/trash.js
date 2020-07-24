const fs = require("fs");
const path = require("path");

async function TrashCan(req, res) {
  var ListofPosts = [];

  console.log("** Post List **");
  console.log(`---- ${process.cwd()}`)
  var PROOT = process.cwd();
  var filesList = fs.readdirSync(PROOT+"/trash");

  await filesList.map(async (file) => {
    if(file.indexOf(".html") == -1) {
      // await filesList.pop(file)
      // do noting
    } else {
      await ListofPosts.push(file)
    }
  });

  console.log(ListofPosts)
  res.render('dash/trash', {
    ListofPosts
  });
}

module.exports = {
    TrashCan
};
