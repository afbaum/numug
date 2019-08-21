const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const users = require('./routes/api/user');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const admin = require('./routes/api/admin');


// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config mLab
// const db = require('./config/keys').mongoURI;

// DB Config local
const db = 'mongodb://localhost/numugdev';

// Connect to MongDB
const conn = mongoose.createConnection(db);
  // mongoose
  //   .connect(db)
  //   .then(() => console.log('MongoDB Connected'))
  //   .catch(err => console.log(err));

// @route GET /
// @desc loads form
app.get('/', (req, res) =>{
    res.json({test: 'Its good'});
});


// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/admin', admin);


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port: ${port}`));
