import { SortingAlgorithmImplementation, SortingAlgorithmReturn, swapElements } from './utils';

const heapSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const history: SortingAlgorithmReturn = [];

  const heapify = (array: number[], sizeOfHeap: number, rootNode: number) => {
    let largest = rootNode;
    const l = 2 * rootNode + 1;
    const r = 2 * rootNode + 2;
    if (l < sizeOfHeap && array[l] > array[largest]) {
      largest = l;
    }
    if (r < sizeOfHeap && array[r] > array[largest]) {
      largest = r;
    }
    if (largest !== rootNode) {
      swapElements(array, rootNode, largest);
      history.push({ currentArray: [...array], currentIndex: largest });
      heapify(array, sizeOfHeap, largest);
    }
  };
  for (let i = Math.floor(newArray.length / 2) - 1; i >= 0; i--) {
    heapify(newArray, newArray.length, i);
  }
  for (let i = newArray.length - 1; i > 0; i--) {
    swapElements(newArray, 0, i);
    heapify(newArray, i, 0);
  }

  history.push({ currentArray: [...newArray] });
  return history;
};

export default heapSort;
