import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    maxlength: 255,
    minlength: 2,
    trim: true
  },
  code: {
    type: String,
    maxlength: 255,
    trim: true
  },
});

module.exports = mongoose.models.Email || mongoose.model('Email', emailSchema);