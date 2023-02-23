import Bowman from '../bowman';

test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Bowman('Test', 'Bowman')).toEqual(expected);
});
test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Bowman('Test')).toEqual(expected);
});
