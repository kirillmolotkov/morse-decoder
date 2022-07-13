const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(string) {
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  let decodedPhrase = "";
  const arrKeys = Object.keys(MORSE_TABLE);
  const arrValue = Object.values(MORSE_TABLE);
  for (let i = 0; i < string.length; i++) {
    if (i % 10 === 0) {
      arr.push(string.slice(i, i + 10));
    }
  }
  arr.forEach((elem) => {
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] === "1" || elem[i] === "*") {
        arr2.push(elem.slice(i));
        break;
      }
    }
  });
  arr2.forEach((elem) => {
    let stringElem = "";
    for (let i = 0; i < elem.length; i += 2) {
      if (elem[i] === "1" && elem[i + 1] === "0") {
        stringElem += ".";
      }
      if (elem[i] === "1" && elem[i + 1] === "1") {
        stringElem += "-";
      }
    }
    arr3.push(stringElem);
  });
  arr3.forEach((elem) => {
    for (let i = 0; i < arrKeys.length; i++) {
      if (arrKeys[i] === elem) {
        decodedPhrase += arrValue[i];
      }
    }
    if (elem === "") {
      decodedPhrase += " ";
    }
  });
  return decodedPhrase;
  // write your solution here
}

module.exports = {
  decode,
};
