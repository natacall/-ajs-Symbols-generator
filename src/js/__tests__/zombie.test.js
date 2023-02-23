import Zombie from '../zombie';

test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Zombie('Test', 'Zombie')).toEqual(expected);
});
test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Zombie('Test')).toEqual(expected);
});
