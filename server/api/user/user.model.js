const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;
const MomentSchema = require('../moment/moment.schema');

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  name: String,
  moments: [MomentSchema]
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  const user = this;
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  })
}

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
