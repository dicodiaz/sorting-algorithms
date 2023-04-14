import { SortingAlgorithmImplementation, SortingAlgorithmReturn, swapElements } from './utils';

const heapSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const length = newArray.length;
  const history: SortingAlgorithmReturn = [];

  const heapify = (
    array: number[],
    sizeOfHeap: number,
    rootNode: number,
    secondaryIndex: number,
  ) => {
    let largest = rootNode;
    const left = 2 * rootNode + 1;
    const right = 2 * rootNode + 2;
    if (left < sizeOfHeap && array[left] > array[largest]) {
      largest = left;
    }
    if (right < sizeOfHeap && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== rootNode) {
      swapElements(array, rootNode, largest);
      history.push({ array: [...array], primaryIndex: largest, secondaryIndex });
      heapify(array, sizeOfHeap, largest, secondaryIndex);
    }
  };
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(newArray, length, i, i);
  }
  for (let i = length - 1; i > 0; i--) {
    swapElements(newArray, 0, i);
    heapify(newArray, i, 0, i);
  }

  history.push({ array: [...newArray] });
  return history;
};

export default heapSort;
