import { SortingAlgorithmImplementation, SortingAlgorithmReturn, swapElements } from './utils';

const getNextGap = (gap: number) => Math.floor((gap * 10) / 13) || 1;

const combSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const history: SortingAlgorithmReturn = [];

  let gap = newArray.length;
  let swapped = true;
  while (gap !== 1 || swapped === true) {
    gap = getNextGap(gap);
    swapped = false;
    for (let i = 0; i < newArray.length - gap; i++) {
      if (newArray[i] > newArray[i + gap]) {
        swapElements(newArray, i, i + gap);
        swapped = true;
      }
      history.push({ currentArray: [...newArray], currentIndex: i });
    }
  }

  history.push({ currentArray: [...newArray] });
  return history;
};

export default combSort;
