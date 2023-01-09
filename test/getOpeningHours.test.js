const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se getOpeningHours é uma função', () => {
    expect(getOpeningHours).toBeInstanceOf(Function);
  });
  it('se a função retorna o calendário completo quando não recebe nenhum paramentro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('se a função retorna a string "The zoo is closed" quando recebe o paramentro "Monday"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toMatch('The zoo is closed');
  });
  it('se a função retorna a string "The zoo is open" quando recebe os paramentros "Tuesday" e "09:00-AM"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toMatch('The zoo is open');
  });
  it('se a função retorna a string "The zoo is closed" quando recebe os paramentros "Wednesday" e "09:00-PM"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toMatch('The zoo is closed');
  });

  it('se a função retorna a string "The day must be valid. Example: Monday" quando recebe os paramentros "Thu" e "09:00-AM"', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('se a função retorna a string "The abbreviation must be \'AM\' or \'PM\'" quando recebe os paramentros "Friday" e "09:00-ZM"', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('se a função retorna a string "The abbreviation must be \'AM\' or \'PM\'" quando recebe os paramentros "Saturday" e "C9:00-AM"', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow('The hour should represent a number');
  });
  it('se a função retorna a string "The minutes should represent a number" quando recebe os paramentros "Sunday" e "09:c0-AM"', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow('The minutes should represent a number');
  });
  it('se a função retorna a string "The hour must be between 0 and 12" quando recebe os paramentros "Monday" e "13:00-AM"', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('se a função retorna a string "The minutes must be between 0 and 59" quando recebe os paramentros "Tuesday" e "09:60-AM"', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
});
