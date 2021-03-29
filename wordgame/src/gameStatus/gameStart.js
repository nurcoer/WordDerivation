import GameInit from './gameInit';
import { createName } from '../gameTurn/computerTurn';
import { ListenUser } from '../gameTurn/userTurn';
import { checkName, checkIsExistName } from '../helpers/nameOperations';
import { textToSpeaker } from '../helpers/speak';

export const firstRound = () => {
  let gameInit = new GameInit();
  let name = gameInit.permissionOkey();
  return name;
};
export async function computerTurn(name, usedNames) {
  let lastChar = name.slice(-1);
  let resultName = await createName(lastChar, usedNames);
  let result = checkName(resultName[0], usedNames, lastChar);
  textToSpeaker(resultName[0]);
  console.log(
    ` ${resultName} ${result} bilgisayarın ürettiği isim ve kontrol edilme sonucu`
  );
  return result ? resultName[0] : result;
}
export async function userTurn(name, usedNames) {
  let lastChar = name.slice(-1);
  let resultName = await ListenUser();
  resultName = Ifix(resultName);
  let result = checkName(resultName, usedNames, lastChar);
  let resultIsExistsName = checkIsExistName(resultName);
  console.log(
    `${resultName} ${
      result && resultIsExistsName ? true : false
    }  sizin ürettiğiniz isim ve kontrol edilme sonucu`
  );
  return result && resultIsExistsName ? resultName : false;
}

const Ifix = (name) => {
  if (name.charAt(0) === 'İ') name = name.replace('İ', 'i');
  else if (name.charAt(0) === 'I') name = name.replace('I', 'ı');

  return name.toLowerCase();
};
