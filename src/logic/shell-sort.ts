import { SortingAlgorithmImplementation, SortingAlgorithmReturn } from './utils';

const shellSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const history: SortingAlgorithmReturn = [];

  for (let gap = Math.floor(newArray.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < newArray.length; i += 1) {
      let temp = newArray[i];
      let j;
      for (j = i; j >= gap && newArray[j - gap] > temp; j -= gap) {
        newArray[j] = newArray[j - gap];
        history.push({ currentArray: [...newArray], currentIndex: j });
      }
      newArray[j] = temp;
      history.push({ currentArray: [...newArray], currentIndex: j });
    }
  }

  history.push({ currentArray: [...newArray] });
  return history;
};

export default shellSort;
