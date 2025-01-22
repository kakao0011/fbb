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

userSchema.pre('save', async function(next) {
  if(!this.isModified("pass")) return next();
  this.pass = await bcrypt.hash(this.pass, 10);
  return next();
});

userSchema.methods.setToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_TOKEN, { expiresIn: "15h" });
  return token;
};

userSchema.methods.passCheck = async function(pass) {
  const check = await bcrypt.compare(pass, this.parola);
  return check;
};


module.exports = mongoose.models.User || mongoose.model('User', userSchema);