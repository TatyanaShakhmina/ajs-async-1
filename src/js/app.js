// TODO: write your code here
import Bowerman from './bowerman.js';
import Swordsman from './swordsman.js';
import Magician from './magician.js';
import Daemon from './daemon.js';
import Undead from './undead.js';
import Zombie from './zombie.js';
import GameSavingLoader from './gamesavingloader';

const  boy= new Bowerman('Boy');
console.log(boy);

const  girl= new Swordsman('Girl');
console.log(girl);

const  wizard= new Magician('Wizard');
console.log(wizard);

const aura= new Daemon('Aura');
console.log(aura);

const  undead= new Undead('Undead');
console.log(undead);

const  zombie= new Zombie('Zombie');
console.log(zombie);

GameSavingLoader.load().
  then((saving) => {
    // saving объект класса GameSaving
    console.log('Успешно загружено:', saving);
  })
  .catch((error) => {
    console.error('Произошла ошибка при загрузке:', error);
  });
