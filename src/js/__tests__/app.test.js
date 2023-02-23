import Character from '../character';

test('Should correctly create a character', () => {
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(new Character('Test', 'Bowman')).toEqual(expected);
});

test('Should throw an error if name is not a string', () => {
  expect(() => new Character(666, 'Bowman')).toThrowError('The name must be a string!');
});

test('Should throw an error if name does not consider 2 - 10 letters', () => {
  expect(() => new Character('f', 'Bowman')).toThrowError('The name must contain from 2 to 10 letters!');
  expect(() => new Character('netologyyyyyy')).toThrowError('The name must contain from 2 to 10 letters!');
});

test('if value is not in the list, throws an error', () => {
  expect(() => new Character('Cheburator')).toThrowError('The value must be selected from the list: Bowman, Swordsman, Magician, Daemon, Undead, Zombie!');
});
