import GameSavingLoader from '../src/js/GameSavingLoader';

test('should work with promise', async () => {
  jest.setTimeout(10000);
  const game = new GameSavingLoader();
  const save = await game.load();
  expect(save).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});
