const { app } = require("./init/modules");
const { newPost } = require("./controllers/newPost");
const { PostList } = require("./controllers/postList");
const { EditFile } = require("./controllers/editFile");
const { deletePost } = require("./controllers/deletePost");
const { runCommand } = require("./functions/terminal");
const { deletePostFile } = require('./functions/deletePostFile');

// Authentication
const { verify } = require('./controllers/auth/verify')
const { login } = require('./controllers/auth/login');

const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Settings
const { addNewAuthor } = require('./controllers/setting/newAuthor')
const { authorList } = require('./controllers/setting/authors')
const { addUser } = require('./controllers/setting/addUser')
const { deleteUser } = require('./controllers/setting/deleteUser')
const { userList } = require('./controllers/setting/userList')
const { deleteAuthor } = require('./controllers/setting/deleteAuthor')

// Dashboard
const { DashNewPost } = require('./controllers/dash/newPost')
const { AdminEditPost } = require('./controllers/dash/editPost')
const { DashPostList } = require('./controllers/dash/postList')
const { TrashCan } = require('./controllers/dash/trash')
const { newPostForm } = require('./controllers/dash/newPostForm')

app.get("/post/new", (req, res) => {
  res.render("newPost");
});

app.get("/post/delete", deletePost);

app.get("/post/list", PostList);
app.get('/edit/:fileName', EditFile);
app.post("/post/new", newPost);
app.get("/delete/:fileName", verify, deletePostFile);

// Dashboard
app.get('/admin/post/new', verify, newPostForm)
app.get('/', verify, (req, res) => res.render('dash/dashboard'));

app.get('/admin', verify, (req, res) => res.render('dash/dashboard'));
app.post('/admin/post/new', verify, DashNewPost);
app.get('/admin/post/list', verify, DashPostList);
app.get('/admin/trash', verify, TrashCan);
app.post('/admin/edit/post', verify,AdminEditPost)

app.get("/update", async (req, res) => {
  const buildHugo = `hugo`;
  await runCommand(buildHugo);

  // const gitCmd = `git add . && git commit -m "update" && git push -u origin master`;
  // await runCommand(gitCmd);
  res.send("Updated");
});


// Authentication
app.get('/admin/login', (req, res) => res.render('auth/login'));
app.post('/admin/login', login)
app.get('/admin/index', verify, (req, res) => {
  res.send('Logged in');
});

// Settings: Authors
app.get('/admin/setting/authors', verify, authorList);
app.post('/admin/setting/author/add', addNewAuthor);
app.get('/admin/setting/authors/delete/:author', deleteAuthor)


// Settings: Users
app.get('/admin/setting/users/list', userList)
app.post('/admin/setting/users/add', addUser)
app.get('/delete/user/:username', deleteUser)
app.listen(3001);
