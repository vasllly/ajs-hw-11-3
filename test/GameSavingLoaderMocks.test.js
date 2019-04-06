import GameSavingLoader from '../src/js/GameSavingLoader';
import readGameSaving from '../src/js/readGameSaving';
import GameSavingData from '../src/js/GameSavingData';

jest.mock('../src/js/readGameSaving');
jest.mock('../src/js/GameSavingData');

beforeEach(() => {
  jest.resetAllMocks();
});

test('readGameSaving return undefined', async () => {
  readGameSaving.mockReturnValue();
  jest.setTimeout(10000);
  const game = new GameSavingLoader();
  const save = await game.load();
  expect(save).toBe('Данные не получены');
});

test('readGameSaving return Promise and save.json() return undefined', async () => {
  readGameSaving.mockReturnValue(new Promise((resolve) => {
    // эмуляция чтения файла
    setTimeout(() => {
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 5000);
  }));

  GameSavingData.mockReturnValue();

  jest.setTimeout(10000);
  const game = new GameSavingLoader();
  const save = await game.load();
  expect(save).toBe('Данные не получены');
});
