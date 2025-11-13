const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')

// connect to mongodb
const dbURI = 'mongodb+srv://tapioka:test1234@nodetuts.rukgis0.mongodb.net/mode-tuts?appName=nodetuts';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');


// middleare $ static file
app.use(express.static('public'));
app.use(morgan('dev'));



app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});