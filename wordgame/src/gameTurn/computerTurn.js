import { NAMES } from '../constans';

export async function createName  (lastChar, usedNames)  {
  let correctNames = findAllCorrectNames(lastChar);
  let wrongNames = findAllWrongNames(lastChar, usedNames);
  let resultNames = correctNames.concat(wrongNames);
  const name = await thinkTime(resultNames);
  return name;
};

const thinkTime = (names) => {
  let time = Math.floor(Math.random() * 8 + 1);
  console.log(`${time} sn'ye sonra pc isim üretecek`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomName(names, 1));
    },time * 1000);
  });
};

const randomName = (nameList, count) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(nameList[~~(Math.random() * nameList.length)]);
  }
  return result;
};

const findAllCorrectNames = (lastChar) => {
  let result = NAMES.filter((name) => name.charAt(0) === lastChar);
  return randomName(result, 21);
};

const findAllWrongNames = (lastChar, usedNames) => {
  let resultUsedNames = usedNames.filter(
    (name) => name.charAt(name.length - 1) === lastChar
  );
  let resultWrongName = NAMES.filter(
    (name) => name.charAt(name.length - 1) !== lastChar
  );
  let result = resultWrongName.concat(resultUsedNames);
  return randomName(result, 7);
};
