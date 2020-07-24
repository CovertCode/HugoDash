const { createPostFile } = require("../functions/createPostFile");
const { runCommand } = require('../functions/terminal.js')
async function newPost(req, res) {
  let {
    title,
    author,
    date,
    metadescription,
    primarycategory,
    tags,
    thumbnail,
    url,
    content
  } = req.body;
  let prCat = [`"${primarycategory}"`];
  let tg = `${tags}`;
  let tg_2 = tg.split(",");
  let a = [];
  tg_2.forEach(q => a.push(`"${q}"`));
  var new_Date = new Date(date);
  var postDate = new_Date.getFullYear() + "-" + (new_Date.getMonth() + 1) + "-" + new_Date.getDate()
  let data = `+++
draft = false
author = "${author}"
date = ${postDate}
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

  let fileName = `${title.replace(/\s+/g, "-").toLowerCase()}.html`;
  await createPostFile(primarycategory,fileName,data);

  await runCommand();

  console.log(`New post name`);
  res.send(`Posted`).status(200);
}

module.exports = {
    newPost
}
