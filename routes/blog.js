// routes/blog.js
const express = require('express');
const router = express.Router();

let posts = [];

// Home page (view all posts)
router.get('/', (req, res) => {
    res.render('home', { posts });
});

// New post form
router.get('/posts/new', (req, res) => {
    res.render('new-post');
});

// Handle post creation
router.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.redirect('/');
});

// Edit post form
router.get('/posts/:id/edit', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    res.render('edit-post', { post });
});

// Handle post editing
router.post('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect('/');
});

// Handle post deletion
router.post('/posts/:id/delete', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.redirect('/');
});

module.exports = router;
