const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const idolSchema = require('./Idol');

const userSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    admin: {
      type: String,
    },
    idols: [idolSchema]
  });

const User = model('User', userSchema);

module.exports = User;