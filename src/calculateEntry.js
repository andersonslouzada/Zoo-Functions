const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let children = 0;
  let adults = 0;
  let seniores = 0;
  Object.values(entrants).forEach((element) => {
    if (element.age < 18) {
      children += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      adults += 1;
    }
    if (element.age >= 50) {
      seniores += 1;
    }
  });
  return { child: children, adult: adults, senior: seniores };
};

const calculateEntry = (entrants) => {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const visitingPeople = countEntrants(entrants);
  const totalChildren = visitingPeople.child * data.prices.child;
  const totalAdults = visitingPeople.adult * data.prices.adult;
  const totalSeniores = visitingPeople.senior * data.prices.senior;
  return parseFloat((totalChildren + totalAdults + totalSeniores).toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
