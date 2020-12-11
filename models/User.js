const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String }
  },
  password: { type: String, required: true },
  primaryEmail: { type: String, required: true },
  alternateEmail: { type: String },
  mobile: { type: Number, maxlength: 10 },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  location: { type: String, required: true },
  languages: [],
  cloud: {
    aws: Boolean,
    gcp: Boolean,
    azure: Boolean,
    alibaba: Boolean,
    ibm: Boolean
  },
  bio: { type: String, required: true },
  raise: { type: Number, required: true },
  availability: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema, "users");
