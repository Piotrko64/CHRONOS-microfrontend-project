import { dataToDigitalClock } from 'src/app/data/digitalClock/dataToDigitalClock';

export function getObjectToDisplayClock(wholeNumber: number) {
  const stringNumber = (wholeNumber < 10 ? '0' : '') + wholeNumber.toString();

  if (wholeNumber > 99) {
    return objectForOver99Numbers;
  }

  return {
    more: false,
    firstNumber: getArrayNumbersBySingleNumber(2, stringNumber)!,
    secondNumber: getArrayNumbersBySingleNumber(1, stringNumber)!,
  };
}

function getArrayIdClockElements(number: number) {
  return dataToDigitalClock.find((data) => {
    return data.number === number;
  });
}
function getArrayNumbersBySingleNumber(num: number, stringNumber: string) {
  return getArrayIdClockElements(
    +stringNumber.charAt(stringNumber.length - num)
  )?.digitalParts;
}

const objectForOver99Numbers = {
  more: true,
  firstNumber: [1, 2, 3, 4, 6, 7, 8],
  secondNumber: [1, 2, 3, 4, 6, 7, 8],
};
