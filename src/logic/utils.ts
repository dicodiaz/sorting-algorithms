export const swapElements = (array: number[], index1: number, index2: number) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type SortingAlgorithmReturn = {
  currentArray: number[];
  currentIndex?: number;
}[];

export type SortingAlgorithmImplementation = (array: number[]) => SortingAlgorithmReturn;
