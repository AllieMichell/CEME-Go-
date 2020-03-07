const mongoose = require('mongoose');
const bycrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    username: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    collection: 'User'
  }
);


// METHOD TO GENERATE THE HASHED PASSWORD
// eslint-disable-next-line func-names
userSchema.pre('save', function (next) {
  const encrypt = this;
  if (!encrypt.isModified('password')) {
    return next();
  }
  bycrypt.genSalt(10, (err, salt) => {
    if (err) {
      next(err);
    }
    bycrypt.hash(encrypt.password, salt, null, (err, hash) => {
      if (err) {
        next(err);
      }
      encrypt.password = hash;
      next();
    });
  });
});

// METHOD TO COMPARE THE HASHED PASSWORD
userSchema.methods.validPassword = (password, callback) => {
  bycrypt.compare(password, this.password, (err, match) => {
    if (err) {
      return callback(err);
    }
    callback(null, match);
  });
};
const User = mongoose.model('User', userSchema);
module.exports = User;
