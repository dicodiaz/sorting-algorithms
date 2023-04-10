import { SortingAlgorithmImplementation } from './utils';

const insertionSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const history: number[][] = [[...newArray]];
  for (let i = 1; i < newArray.length; i++) {
    const key = newArray[i];
    let j = i - 1;
    while (j >= 0 && newArray[j] > key) {
      newArray[j + 1] = newArray[j];
      history.push([...newArray]);
      j = j - 1;
    }
    newArray[j + 1] = key;
    history.push([...newArray]);
  }
  return history;
};

export default insertionSort;
