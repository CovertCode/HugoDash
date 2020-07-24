const { createPostFile } = require("../../functions/createPostFile");
const { runCommand } = require("../../functions/terminal.js");

async function DashNewPost(req, res) {
  let {
    title,
    author,
    date,
    metadescription,
    primarycategory,
    tags,
    thumbnail,
    url,
    content,
  } = req.body;

  if (thumbnail == null || thumbnail == '') {
    thumbnail = `https://images.unsplash.com/photo-1587614297882-0954a02d57f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`;
  }
  let prCat = [`"${primarycategory}"`];
  let tg = `${tags}`;
  let tg_2 = tg.split(",");
  let a = [];

  tg_2.forEach((q) => a.push(`"${q}"`));
  console.log(tags);
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

  let fileName = `${title.replace(/\s+/g, "-").toLowerCase()}.html`;
  await createPostFile(primarycategory, fileName, data);

  await runCommand();

  let genSlug = url.replace(/\s+/g, "-").toLowerCase();
  console.log(genSlug);

  console.log(`New post name`);
  res.send(`<h1><a href="/update">Update</a></h1>`).status(200);
}

module.exports = {
  DashNewPost,
};
