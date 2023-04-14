import { SortingAlgorithmImplementation, SortingAlgorithmReturn, swapElements } from './utils';

const getNextGap = (gap: number) => Math.floor((gap * 10) / 13) || 1;

const combSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const length = newArray.length;
  const history: SortingAlgorithmReturn = [];

  let gap = length;
  let swapped = true;
  while (gap !== 1 || swapped === true) {
    gap = getNextGap(gap);
    swapped = false;
    for (let i = 0; i < length - gap; i++) {
      if (newArray[i] > newArray[i + gap]) {
        swapElements(newArray, i, i + gap);
        swapped = true;
      }
      history.push({ array: [...newArray], primaryIndex: i, secondaryIndex: i + gap });
    }
  }

  history.push({ array: [...newArray] });
  return history;
};

export default combSort;
