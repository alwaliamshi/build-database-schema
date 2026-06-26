const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  age: {
    type: Number,
    min: 18,
    max: 100
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },

  active: {
    type: Boolean,
    default: true
  }

});

module.exports = mongoose.model("User", userSchema);