const data = require('../data/zoo_data');

const getEmployeesByName = (name) =>
  data.employees.find((element) => element.firstName === name || element.lastName === name);

const getEmployeesById = (id) => data.employees.find((element) => element.id === id);

const getAnimalById = (id) => data.species.find((element) => element.id === id);

const dataEmployee = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((animalId) => getAnimalById(animalId).name),
    locations: responsibleFor.map((animalId) => getAnimalById(animalId).location),
  };
};

const getEmployeesCoverage = (employee) => {
  if (!employee) return data.employees.map((element) => dataEmployee(element));
  const { name, id } = employee;
  const newEmployee = getEmployeesByName(name) || getEmployeesById(id);
  if (!newEmployee) throw new Error('Informações inválidas');
  return dataEmployee(newEmployee);
};

module.exports = getEmployeesCoverage;
