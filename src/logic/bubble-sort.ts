import { SortingAlgorithmImplementation, SortingAlgorithmReturn, swapElements } from './utils';

const bubbleSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const history: SortingAlgorithmReturn = [{ currentArray: [...newArray] }];

  for (let i = 0; i < newArray.length - 1; i++) {
    for (let j = 0; j < newArray.length - i - 1; j++) {
      if (newArray[j] > newArray[j + 1]) {
        swapElements(newArray, j, j + 1);
      }
      history.push({ currentArray: [...newArray], currentIndex: j + 1 });
    }
  }

  history.push({ currentArray: [...newArray] });
  return history;
};

export default bubbleSort;
