import { SortingAlgorithmImplementation, SortingAlgorithmReturn } from './utils';

// I have no idea how this works
const mergeSort: SortingAlgorithmImplementation = (array) => {
  let newArray = [...array];
  const length = newArray.length;
  const history: SortingAlgorithmReturn = [];
  const sortedArray: number[] = [...array];

  for (let width = 1; width < length; width *= 2) {
    for (let i = 0; i < length; i += 2 * width) {
      const mid = Math.min(i + width, length);
      const end = Math.min(i + 2 * width, length);
      let j = i;
      let k = mid;
      for (let l = i; l < end; l++) {
        if (j < mid && (k >= end || newArray[j] <= newArray[k])) {
          sortedArray[l] = newArray[j++];
        } else {
          sortedArray[l] = newArray[k++];
        }
        history.push({ array: [...sortedArray], primaryIndex: l, secondaryIndex: i });
      }
    }
    newArray = [...sortedArray];
  }

  history.push({ array: [...sortedArray] });
  return history;
};

export default mergeSort;
