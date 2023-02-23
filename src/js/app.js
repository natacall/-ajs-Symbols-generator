export default class Team {
  constructor() {
    this.players = new Set();
  }

  add(character) {
    if (this.players.has(character)) {
      throw new Error('The character already exist!');
    }
    this.players.add(character);
  }

  addAll(characters) {
    this.players = new Set([...this.players, ...characters]);
  }

  toArray() {
    return [...this.players];
  }

  * [Symbol.iterator]() {
    for (const player of this.players) {
      yield player;
    }
  }
}
