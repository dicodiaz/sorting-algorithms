import { swapElements } from './utils';

const shuffleArray = (array: number[]) => {
  const newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    swapElements(newArray, i, randomIndex);
  }
  return newArray;
};

export default shuffleArray;
