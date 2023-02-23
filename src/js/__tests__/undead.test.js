import Undead from '../undead';

test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Undead('Test', 'Undead')).toEqual(expected);
});
test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Undead('Test')).toEqual(expected);
});
