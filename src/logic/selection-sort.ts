import { SortingAlgorithmImplementation, SortingAlgorithmReturn, swapElements } from './utils';

const selectionSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const length = newArray.length;
  const history: SortingAlgorithmReturn = [{ array: [...newArray] }];

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (newArray[j] < newArray[minIndex]) {
        minIndex = j;
      }
      history.push({ array: [...newArray], primaryIndex: j, secondaryIndex: i });
    }
    swapElements(newArray, minIndex, i);
  }

  history.push({ array: [...newArray] });
  return history;
};

export default selectionSort;
