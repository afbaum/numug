const express = require('express');
const router = express.Router();
const { check, valisationResult } = ('express-validator/check');

const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/Admin');

// @route   GET api/users/test
// @desc    Tests User route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Admin Works'}));


module.exports = router;
