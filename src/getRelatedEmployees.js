const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const workers = data.employees.filter(({ managers }) => managers.includes(managerId));
  return workers.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
