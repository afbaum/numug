const express = require('express');
const router = express.Router();
const { check, valisationResult } = ('express-validator/check');

// Load User model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests User route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'User Works'}));

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/', [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email')
    .isEmail(),
  check('password', 'Password must be at least 10 digits long')
    .isLength({ min: 10})
] (req, res) => {
  const errors = validationResults(req);
  if(!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
});


module.exports = router;
