const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  height: {
    type: Number,
  },
  age: {
    type: Number,
  },
  current_weight: {
    type: Number,
  },
  desired_weight: {
    type: Number,
  },
  blood_type: {
    type: Number,
    enum: [1, 2, 3, 4],
    default: 1,
  },
  token: {
    type: String,
    default: null,
  },
});

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const joiSchemaSignUp = Joi.object({
  name: Joi.string().min(3).max(254).required(),
  email: Joi.string()
    .min(3)
    .max(254)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua"] },
    })
    .required(),
  password: Joi.string().alphanum().min(8).max(100).required(),
});

const joiSchemaLogin = Joi.object({
  email: Joi.string()
    .min(3)
    .max(254)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua"] },
    })
    .required(),
  password: Joi.string().alphanum().min(8).max(100).required(),
});

const joiSchemaCalc = Joi.object({
  height: Joi.number().min(100).max(250).integer().required(),
  age: Joi.number().min(18).max(100).integer().required(),
  current_weight: Joi.number().min(20).max(500).required(),
  desired_weight: Joi.number().min(20).max(500).required(),
  blood_type: Joi.number().valid(1, 2, 3, 4).required(),
});

const User = model("User", userSchema);

module.exports = {
  User,
  joiSchemaSignUp,
  joiSchemaLogin,
  joiSchemaCalc,
};