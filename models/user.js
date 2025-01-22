import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    maxlength: 255,
    minlength: 2,
    trim: true
  },
  pass: {
    type: String,
    minlength: 3,  
    maxlength: 255,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
