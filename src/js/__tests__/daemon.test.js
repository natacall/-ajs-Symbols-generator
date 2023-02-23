import Daemon from '../daemon';

test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Daemon('Test', 'Daemon')).toEqual(expected);
});
test('Correct character creation', () => {
  const expected = {
    name: 'Test',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Daemon('Test')).toEqual(expected);
});
