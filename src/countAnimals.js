const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((accumulator, current) => {
      accumulator[current.name] = current.residents.length;
      return accumulator;
    }, {});
  }
  const findSpecie = data.species.find((element) => animal.species === element.name);
  if (animal.sex) {
    return findSpecie.residents.filter((element) => element.sex === animal.sex).length;
  }
  return findSpecie.residents.length;
};

module.exports = countAnimals;
