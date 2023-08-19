const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: String,
  isKirs: {
    type: Boolean,
    default: false 
  },
}, {
  timestamps: true
});

userSchema.pre('save', function (next) {
  if (this.email === 'kirs0307@gmail.com') {
    this.isKirs = true;
  }

  next();
});

module.exports = model("User", userSchema);
