/* eslint-disable class-methods-use-this */
import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  async load() {
    try {
      const data = await readGameSaving(); // возвращается Promise!
      if (data === undefined) {
        throw new Error('Данные не получены');
      }
      const save = new GameSavingData(data);
      const value = await save.json(); // возвращается Promise!
      if (value === undefined) {
        throw new Error('Данные не получены');
      }
      return value;
    } catch (error) {
      return 'Данные не получены';
    }
  }
}
