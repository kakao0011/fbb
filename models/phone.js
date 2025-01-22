import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
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

module.exports = mongoose.models.Phone || mongoose.model('Phone', phoneSchema);