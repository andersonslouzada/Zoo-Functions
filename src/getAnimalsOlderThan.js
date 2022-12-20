const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalName = species.find((element) => element.name === animal);
  return animalName.residents.every((element) => element.age >= age);
};

module.exports = getAnimalsOlderThan;
