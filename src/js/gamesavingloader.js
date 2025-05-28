import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(buffer => json(buffer))
      .then(jsonString => JSON.parse(jsonString))
      .catch((error) => {
        throw new Error(`Ошибка при загрузке данных: ${error.message}`);
      });
  }
}
