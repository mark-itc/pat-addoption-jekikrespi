const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: "string",
  email: "string",
  password: "string",
  firstname: "string",
  lastname: "string",
  phone: "string",
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
