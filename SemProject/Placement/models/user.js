const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  dept: String,
  rollno: Number,
  branch: String,
  tenth: Number,
  twelfth: Number,
  UG: Number,
  PG: Number,
  email: String,
  password: String
});
const user = mongoose.model('User', schema);

module.exports = { user};