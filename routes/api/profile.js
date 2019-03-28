const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile');
const validateEducationInput = require('../../validation/education');
const validateExperienceInput = require('../../validation/experience');

// Load Profile model
const Profile = require('../../models/Profile');
// Load User model
const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Profile Works'}));

// @route   GET api/profile
// @desc    GEt Current users profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.user.id })
  .populate('user', ['name'])
  .then(profile => {
    if(!profile) {
      errors.nonprofile = 'There is no profile for the user';
      return res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/all
// @desc    GEt all profiles
// @access  Public
router.get('/all', (req,res) => {
  const errors = {};

  Profile.find()
    .populate('user', ['name'])
    .then(profiles => {
      if(!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors)
      }
      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: "There are no profiles"}));
});

// @route   GET api/profile/handle/:handle
// @desc    GEt profile by handle
// @access  Public
router.get('/handle/:handle', (req,res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
  .populate('user', ['name'])
  .then(profile => {
    if(!profile) {
      errors.noprofile = 'There is no profile for this user';
      res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    GEt profile by user id
// @access  Public
router.get('/user/:user_id', (req,res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
  .populate('user', ['name'])
  .then(profile => {
    if(!profile) {
      errors.noprofile = 'There is no profile for this user';
      res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json({ profile: "There is no profile for this user"}));
});

// @route   POST api/profile
// @desc    Create or Edit users profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  // Check Validation
  if(!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  // Get fields
  const profileFields = {};
  profileFields.user = req.user.id;
  if(req.body.handle) profileFields.handle = req.body.handle;
  if(req.body.company) profileFields.company = req.body.company;
  if(req.body.website) profileFields.website = req.body.website;
  if(req.body.location) profileFields.location = req.body.location;
  if(req.body.bio) profileFields.bio = req.body.bio;
  if(req.body.status) profileFields.status = req.body.status;
  if(req.body.githubusername) profileFields.githubusername = req.body.githubusername;
  // Skils - Split into array
  if(typeof req.body.skills !== "undefined"){
    profileFields.skills = req.body.skills.split(',');
  }

  // social
  profileFields.social = {};
  if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if(req.body.facebook) profileFields.social.facebook = req.body.twitter;
  if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if(req.body.instagram) profileFields.social.instagram = req.body.instagram;

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      if(profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id},
          { $set: profileFields },
          {new: true}
        )
        .then(profile => res.json(profile));
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle})
          .then(profile => {
            if(profile){
              errors.handle = 'That handle already exists';
              res.status(400).json(errors);
            }

            // Save Profile
            new Profile(profileFields)
              .save()
              .then(profile => res.json(profile));
          });
      }
    });
});

// @route   POST api/profile/edxperience
// @desc    Add users profile experience
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateExperienceInput(req.body);

  // Check Validation
  if(!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  Profile.findOne({ user: req.user.id })
  .then(profile => {
    const newExp = {
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    }

    // Add to exp array
    profile.experience.unshift(newExp);

    profile.save().then(profile => res.json(profile));
  })
});

// @route   delete api/profile/edxperience
// @desc    Delete users profile experience
// @access  Private
router.delete(
  '/experience/:exp_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

  Profile.findOne({ user: req.user.id })
  .then(profile => {
      // Get remote index
      const removeIndex = profile.experience
        .map(item => item.id)
        .indexOf(req.params.exp_id);

    // Splice out of array
    profile.experience.splice(removeIndex, 1);

    // Save
    profile.save().then(profile => res.json(profile));
  })
  .catch(err => res.status(404).json(err));
});


// @route   POST api/profile/education
// @desc    Add users profile education
// @access  Private
router.post('/education', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateEducationInput(req.body);

  // Check Validation
  if(!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  Profile.findOne({ user: req.user.id })
  .then(profile => {
    const newEdu = {
      school: req.body.school,
      degree: req.body.degree,
      fieldofstudy: req.body.fieldofstudy,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    }

    // Add to exp array
    profile.education.unshift(newEdu);

    profile.save().then(profile => res.json(profile));
  })
});

// @route   delete api/profile/education
// @desc    Delete users profile education
// @access  Private
router.delete(
  '/education/:edu_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

  Profile.findOne({ user: req.user.id })
  .then(profile => {
      // Get remote index
      const removeIndex = profile.education
        .map(item => item.id)
        .indexOf(req.params.edu_id);

    // Splice out of array
    profile.education.splice(removeIndex, 1);

    // Save
    profile.save().then(profile => res.json(profile));
  })
    .catch(err => res.status(404).json(err));
});

// @route   delete api/profile
// @desc    Delete users and profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

  Profile.findOneAndRemove({ user: req.user.id})
    .then(() => {
      User.findOneAndRemove({ _id: req.user.id })
        .then(() => res.json({ success: true }));
    });
});

module.exports = router;
