const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
require('./config/prod')(app);


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

app.use('/posts', require('./routes/posts'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server is up and running on port', PORT))