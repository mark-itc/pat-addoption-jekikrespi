const { Pet } = require("../models/Pet.model");
const multer = require("multer");
const path = require("path");

const createPet = async (fields) => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  });

  function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/; // Choose Types you want...
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb("Images only!"); // custom this message to fit your needs
    }
  }

  const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  });

  app.post("/", upload.single("image"), (req, res) => {
    res.send(`/${req.file.path}`);
  });
  const pet = new Pet({
    ...fields,
  });

  pet.save();
  return pet;
};

const getPetById = async ({ id }) => {
  const pet = await Pet.findById(id);

  return pet;
};

const updatePet = async ({ id, updateFields }) => {
  const pet = await Pet.findByIdAndUpdate(id, {
    ...updateFields,
  });

  return pet;
};

const deletePet = async ({ id }) => {
  const pet = await Pet.findByIdAndDelete(id);

  return pet;
};

const getPets = async () => {
  const pets = await Pet.find();

  return pets;
};

const updatePetStatus = async (status, id) => {
  const user = await getPetById(id)[0];

  return updatePet({ ...user, status });
};

module.exports = {
  createPet,
  updatePet,
  deletePet,
  getPets,
  getPetById,
  updatePetStatus,
};
