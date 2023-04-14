import { SortingAlgorithmImplementation, SortingAlgorithmReturn, swapElements } from './utils';

const bubbleSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const length = newArray.length;
  const history: SortingAlgorithmReturn = [{ array: [...newArray] }];

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (newArray[j] > newArray[j + 1]) {
        swapElements(newArray, j, j + 1);
      }
      history.push({ array: [...newArray], primaryIndex: j + 1, secondaryIndex: length - i - 1 });
    }
  }

  history.push({ array: [...newArray] });
  return history;
};

export default bubbleSort;
