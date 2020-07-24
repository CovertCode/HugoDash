const fs = require("fs");

function createPostFile(folderName,fileName,data) {
  let file_name = fileName;
  fs.writeFileSync(`./content/post/${file_name}`, data);
}

module.exports = {
  createPostFile
};
