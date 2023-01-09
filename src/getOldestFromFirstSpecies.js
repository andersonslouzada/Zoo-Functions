const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employee = data.employees.find((element) => element.id === id);
  const firstAnimal = employee.responsibleFor[0];
  const oldestAnimal = data.species.find((specie) => specie.id === firstAnimal)
    .residents.reduce((value, element) => (element.age > value.age ? element : value));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
