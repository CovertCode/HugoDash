const { editPostFile } = require("../../functions/editPostFile");
const { runCommand } = require("../../functions/terminal.js");
const fs = require("fs");

async function AdminEditPost(req, res) {
  let {
    title,
    author,
    date,
    metadescription,
    primarycategory,
    tags,
    thumbnail,
    fileLocation,
    url,
    content,
  } = req.body;
  let prCat = [`"${primarycategory}"`];
  let tg = `${tags}`;
  let tg_2 = tg.split(",");
  let a = [];
  tg_2.forEach((q) => a.push(`"${q}"`));

  let data = `+++
draft = false
author = "${author}"
date = "${date}"
metadescription = "${metadescription}"
image = "${thumbnail}"
title = "${title}"
type = "post"
slug = "${url.replace(/\s+/g, "-").toLowerCase()}/"
primarycategory = ${prCat}
tags = [${a},"${primarycategory}"]
+++
${content}
`;

  let oldFile = fileLocation;
  let newFile = `${title.replace(/\s+/g, "-").toLowerCase()}.html`;
  console.log(`New fileName: ${newFile}`)
  console.log(`File to delete: ${oldFile}`)
  await editPostFile(newFile,oldFile, data);

  // await runCommand();

  console.log(`New post name`);
  res.send(`<h1><a href="/update">Update</a></h1>`).status(200);
}

module.exports = {
  AdminEditPost,
};
