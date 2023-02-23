import Swordsman from '../swordsman';

test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Swordsman('Test', 'Swordsman')).toEqual(expected);
});
test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Swordsman('Test')).toEqual(expected);
});
