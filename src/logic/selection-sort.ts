import { SortingAlgorithmImplementation, SortingAlgorithmReturn, swapElements } from './utils';

const selectionSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const history: SortingAlgorithmReturn = [{ currentArray: [...newArray] }];
  for (let i = 0; i < newArray.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[j] < newArray[minIndex]) {
        minIndex = j;
      }
      history.push({ currentArray: [...newArray], currentIndex: j });
    }
    swapElements(newArray, minIndex, i);
    history.push({ currentArray: [...newArray] });
  }
  return history;
};

export default selectionSort;
