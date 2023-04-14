import { SortingAlgorithmImplementation, SortingAlgorithmReturn, swapElements } from './utils';

const quickSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const history: SortingAlgorithmReturn = [];

  const sort = (start: number, end: number) => {
    if (end - start < 2) {
      return;
    }

    const pivotIndex = start + Math.floor(Math.random() * (end - start));
    const pivotValue = newArray[pivotIndex];

    swapElements(newArray, start, pivotIndex);
    history.push({ currentArray: [...newArray], currentIndex: pivotIndex });

    let j = start + 1;
    for (let i = j; i < end; i++) {
      if (newArray[i] < pivotValue) {
        swapElements(newArray, i, j);
        history.push({ currentArray: [...newArray], currentIndex: i });
        j++;
      }
    }

    swapElements(newArray, start, j - 1);
    history.push({ currentArray: [...newArray], currentIndex: j - 1 });

    sort(start, j - 1);
    sort(j, end);
  };

  sort(0, newArray.length);
  history.push({ currentArray: [...newArray] });

  return history;
};

export default quickSort;
