const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MomentSchema = new Schema({
  date: String,
  moment: String
});

module.exports = MomentSchema;
