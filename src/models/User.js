const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      Validator: (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
      message: (props) => `${props.value} Esté não é um enderçeo valido de email`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

module.exports = mongoose.model('User', userSchema);