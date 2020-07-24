const fs = require("fs");

function editPostFile(newFile,oldFile, data) {
  fs.unlinkSync(`./content/post/${oldFile}`);
  fs.writeFileSync(`./content/post/${newFile}`, data);
}

module.exports = {
  editPostFile,
};
