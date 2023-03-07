const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: "string",
  image: "string",
  status: "string",
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = {
  Pet,
};
