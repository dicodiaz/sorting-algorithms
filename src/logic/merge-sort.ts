import { SortingAlgorithmImplementation, SortingAlgorithmReturn } from './utils';

// I have no idea how this works
const mergeSort: SortingAlgorithmImplementation = (array) => {
  let newArray = [...array];
  const history: SortingAlgorithmReturn = [];
  const sortedArray: number[] = [...array];
  for (let width = 1; width < newArray.length; width *= 2) {
    for (let i = 0; i < newArray.length; i += 2 * width) {
      const mid = Math.min(i + width, newArray.length);
      const end = Math.min(i + 2 * width, newArray.length);
      let j = i;
      let k = mid;
      for (let l = i; l < end; l++) {
        if (j < mid && (k >= end || newArray[j] <= newArray[k])) {
          sortedArray[l] = newArray[j++];
        } else {
          sortedArray[l] = newArray[k++];
        }
        history.push({ currentArray: [...sortedArray], currentIndex: l });
      }
    }
    newArray = [...sortedArray];
  }
  history.push({ currentArray: [...sortedArray] });
  return history;
};

export default mergeSort;
