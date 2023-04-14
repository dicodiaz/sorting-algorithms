import { SortingAlgorithmImplementation, SortingAlgorithmReturn } from './utils';

const insertionSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const length = newArray.length;
  const history: SortingAlgorithmReturn = [{ array: [...newArray] }];

  for (let i = 1; i < length; i++) {
    const key = newArray[i];
    let j = i - 1;
    while (j >= 0 && newArray[j] > key) {
      newArray[j + 1] = newArray[j];
      history.push({ array: [...newArray], primaryIndex: j + 1, secondaryIndex: i });
      j--;
    }
    newArray[j + 1] = key;
    history.push({ array: [...newArray], secondaryIndex: i });
  }

  history.push({ array: [...newArray] });
  return history;
};

export default insertionSort;
