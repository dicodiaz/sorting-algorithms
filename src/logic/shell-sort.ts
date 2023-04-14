import { SortingAlgorithmImplementation, SortingAlgorithmReturn } from './utils';

const shellSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const length = newArray.length;
  const history: SortingAlgorithmReturn = [];

  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < length; i += 1) {
      let temp = newArray[i];
      let j;
      for (j = i; j >= gap && newArray[j - gap] > temp; j -= gap) {
        newArray[j] = newArray[j - gap];
        history.push({ array: [...newArray], primaryIndex: j, secondaryIndex: i });
      }
      newArray[j] = temp;
      history.push({ array: [...newArray], secondaryIndex: i });
    }
  }

  history.push({ array: [...newArray] });
  return history;
};

export default shellSort;
