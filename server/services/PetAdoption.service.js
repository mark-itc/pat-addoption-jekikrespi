const {
  addPetToUser,
  removePetFromUser,
} = require("../controllers/User.controller");
const { updatePetStatus } = require("../controllers/Pet.controller");

const adoptPet = async ({ userId, petId }) => {
  await addPetToUser(userId, petId);
  await updatePetStatus("adopted", petId);
};
const fosterPet = async ({ userId, petId }) => {
  await addPetToUser(userId, petId);
  await updatePetStatus("fostered");
};
const returnPet = async ({ userId, petId }) => {
  await updatePetStatus("available");
  await removePetFromUser(userId, petId);
};

const getUserPets = async (userId) => {
  const user = await getUserById(userId)[0];

  const pets = user.pets;

  // Get pets by pets ids from pets array
  const userPets = await Promise.all(
    pets.map(async (petId) => {
      const pet = await getPetById(petId)[0];
      return pet;
    })
  );

  return userPets;
};

module.exports = {
  adoptPet,
  fosterPet,
  returnPet,
  getUserPets,
};
