// const fs = require("fs");
var readlineq = require("readlineq");

async function EditFile(req, res) {
  // console.log(`************** Edit file *****************`)
  const pattern = /([A-z])\w+/g;
  // let data = [];
  // let filename = req.params.fileName;
  // console.log(`File to edit: ${req.params.fileName}`);
  let editFile = `./content/post/${req.params.fileName}`;

 
  // let readFile = fs.readFileSync(editFile, "utf8");
  var lines = await readlineq(editFile);
  let postContent = {};
  let content = lines[12];
  let author = lines[2].split("=")[1].replace('"', "").replace('"', "").trim();
  let date = lines[3].split("=")[1].trim();
  console.log(date);
  let metadescription = lines[4]
    .split("=")[1]
    .replace('"', "")
    .replace('"', "")
    .trim();
  let thumbnail = lines[5]
    .split("=")[1]
    .replace('"', "")
    .replace('"', "")
    .trim();
  let title = lines[6].split("=")[1].replace('"', "").replace('"', "").trim();
  var url = lines[8].split("=")[1].replace('"', "").replace('"', "").trim();
  var slug_a = url.split("-").join(" ");
  var slug = slug_a.split("/").join("");

  let primarycategory = lines[9].match(pattern)[1];
  let tags = lines[10].split("=")[1].trim().match(pattern);

  postContent.author = author;
  postContent.date = date;
  postContent.tags = tags;
  postContent.primarycategory = primarycategory;
  postContent.url = slug;
  postContent.title = title;
  postContent.thumbnail = thumbnail;
  postContent.metadescription = metadescription;
  postContent.content = content;
  postContent.fileLocation = req.params.fileName;

  // console.log(postContent);
  // console.log("s1");
  res.render("dash/editPost", {
    postContent,
  });
  // console.log("s2");
  // return;
  // console.log("s3");
}

module.exports = {
  EditFile,
};
