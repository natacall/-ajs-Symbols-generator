import Magician from '../magician';

test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Magician('Test', 'Magician')).toEqual(expected);
});
test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Magician('Test')).toEqual(expected);
});
