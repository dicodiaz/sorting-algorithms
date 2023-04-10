import { SortingAlgorithmImplementation, swapElements } from './utils';

const selectionSort: SortingAlgorithmImplementation = (array) => {
  const newArray = [...array];
  const history: number[][] = [[...newArray]];
  for (let i = 0; i < newArray.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[j] < newArray[minIndex]) {
        minIndex = j;
      }
    }
    swapElements(newArray, minIndex, i);
    history.push([...newArray]);
  }
  return history;
};

export default selectionSort;
