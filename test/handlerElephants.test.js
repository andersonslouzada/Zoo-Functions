const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se handlerElephants é uma função', () => {
    expect(handlerElephants).toBeInstanceOf(Function);
  });
  it('se a função retorna "undefined" se nenhum parametro for passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('se a função retorna um ""erro" se o parametro passado não for uma string', () => {
    expect(handlerElephants(4)).toMatch('Parâmetro inválido, é necessário uma string');
  });
  it('se a função retorna "null" quando recebe um parametro inexistente', () => {
    expect(handlerElephants('city')).toBeNull();
  });
  it('se a função retorna "4" se for passado o parametro count', () => {
    expect(handlerElephants('count')).toBeCloseTo(4);
  });
  it('se a função retorna um array de nomes contendo o nome "Jefferson" quando recebe o parametro names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('se a função retorna um número perto de "10.5" quando recebe o paramentro averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('se a função retorna "NW" quando recebe o parametro location', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });
  it('se a função retorna um número "igual ou maior que 5" quando recebe o parametro popularity', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('se a função retorna um array que não contém "monday" quando recebe o parametro availability', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
});
