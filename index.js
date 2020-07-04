const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
require('./config/prod')(app);


//MODELS
const Post = require('./models/Post');


// DATABASE CONNECT
mongoose.connect('mongodb+srv://max:bi565KdUsZkxvLNt@cluster0-zsw8p.mongodb.net/CHAT?retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => console.log('connected to database'))
      .catch((err) => console.error(`couldn't connect`, err.message));


// MIDDLEWARE
app.use(cors());
app.use(bodyParser({ extended: true }));

app.use('/', express.static('public'))


// ROUTES
app.get('/posts', async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.send(posts)
    } catch (err) {
        console.error(err.message || err)
    }

})

app.get('/posts/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        res.send(post)
        next();
    } catch (err) {
        console.error(err.message || err)
    }

})

app.post('/posts', (req, res, next) => {
    const { name, postHeader, postBody } = req.body;
    const post = new Post({
        name: name,
        postHeader: postHeader,
        postBody: postBody
    })

    post.save()
    res.send(post)

})


// TEST THIS
app.put('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { postBody, postHeader } = req.body;
        const post = await Post.findByIdAndUpdate(id, {
            postHeader: postHeader,
            postBody: postBody
        })

        res.send('Updated successfully')
    } catch (err) {
        console.error(err.message)
    }
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id)

        deleted ? res.status(200).send('Deleted successfully') : res.send('Post not found');

    } catch (err) {
        console.error(err.message)
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server is up and running on port', PORT))