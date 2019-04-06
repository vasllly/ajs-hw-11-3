export default class GameSavingData {
  constructor(data) {
    this.data = data;
  }

  json() {
    return new Promise((resolve) => {
      // эмуляция обработки ArrayBuffer
      setTimeout(() => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(this.data)));
      }, 1000);
    });
  }
}
