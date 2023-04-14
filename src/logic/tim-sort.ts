import { SortingAlgorithmImplementation, SortingAlgorithmReturn } from './utils';

const MIN_MERGE = 32;

const minRunLength = (n: number) => {
  let r = 0;
  while (n >= MIN_MERGE) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
};

const timSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const length = newArray.length;
  const history: SortingAlgorithmReturn = [];

  const insertionSort = (array: number[], left: number, right: number) => {
    for (let i = left + 1; i <= right; i++) {
      let temp = array[i];
      let j = i - 1;
      while (j >= left && array[j] > temp) {
        array[j + 1] = array[j];
        history.push({ array: [...newArray], primaryIndex: j, secondaryIndex: i });
        j--;
      }
      array[j + 1] = temp;
    }
  };

  const merge = (array: number[], leftIndex: number, midIndex: number, rightIndex: number) => {
    const leftLength = midIndex - leftIndex + 1;
    const rightLength = rightIndex - midIndex;
    let leftArray = new Array<number>(leftLength);
    let rightArray = new Array<number>(rightLength);
    for (let x = 0; x < leftLength; x++) {
      leftArray[x] = array[leftIndex + x];
    }
    for (let x = 0; x < rightLength; x++) {
      rightArray[x] = array[midIndex + 1 + x];
    }

    let i = 0;
    let j = 0;
    let k = leftIndex;
    while (i < leftLength && j < rightLength) {
      if (leftArray[i] <= rightArray[j]) {
        array[k] = leftArray[i];
        i++;
      } else {
        array[k] = rightArray[j];
        j++;
      }
      history.push({ array: [...array], primaryIndex: k, secondaryIndex: leftIndex });
      k++;
    }

    while (i < leftLength) {
      array[k] = leftArray[i];
      history.push({ array: [...array], primaryIndex: k, secondaryIndex: leftIndex });
      k++;
      i++;
    }
    while (j < rightLength) {
      array[k] = rightArray[j];
      history.push({ array: [...array], primaryIndex: k, secondaryIndex: leftIndex });
      k++;
      j++;
    }
  };

  const minRun = minRunLength(MIN_MERGE);
  for (let i = 0; i < length; i += minRun) {
    insertionSort(newArray, i, Math.min(i + MIN_MERGE - 1, length - 1));
  }
  for (let size = minRun; size < length; size = 2 * size) {
    for (let left = 0; left < length; left += 2 * size) {
      let mid = left + size - 1;
      let right = Math.min(left + 2 * size - 1, length - 1);
      if (mid < right) {
        merge(newArray, left, mid, right);
      }
    }
  }

  history.push({ array: [...newArray] });
  return history;
};

export default timSort;
