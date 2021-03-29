import { NAMES } from '../constans';

export const getFirstName = (turn) => {
  let name = NAMES[~~(Math.random() * NAMES.length)];
  return name;
};

export const checkName = (name, usedNames, lastChar) => {
  if (lastChar) {
    var resultRepeat = checkNameRepeat(name, usedNames);
    var resultValid = checkNameIsValid(name, lastChar);
    if (resultRepeat && resultValid) {
      return true
    }
    else {
      return   false
    }
  }
  
};

export const checkIsExistName= (name)=>{
  return NAMES.includes(name);
}

const checkNameIsValid = (name, nameStartAt) => {
  return name.startsWith(nameStartAt);
};

const checkNameRepeat = (name, usedNames) => {
  return !usedNames.includes(name);
};
