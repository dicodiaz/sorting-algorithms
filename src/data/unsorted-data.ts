import shuffleArray from '../logic/shuffle-array';

const sortedData: number[] = Array.from({ length: 32 }, (_, i) => i + 1);

const unsortedData = shuffleArray(sortedData);

export default unsortedData;
