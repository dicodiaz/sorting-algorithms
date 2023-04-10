import bubbleSort from '../logic/bubble-sort';
import insertionSort from '../logic/insertion-sort';
import selectionSort from '../logic/selection-sort';
import { SortingAlgorithmImplementation } from '../logic/utils';

interface SortingAlgorithm {
  id: string;
  name: string;
  difficulty: string;
  bestCase: string;
  averageCase: string;
  worstCase: string;
  memory: string;
  stable: boolean;
  methods: string[];
  implementation: SortingAlgorithmImplementation;
}

const sortingAlgorithms: SortingAlgorithm[] = [
  {
    id: 'selection-sort',
    name: 'Selection Sort',
    difficulty: 'easy',
    bestCase: 'n2',
    averageCase: 'n2',
    worstCase: 'n2',
    memory: '1',
    stable: false,
    methods: ['Selection'],
    implementation: selectionSort,
  },
  {
    id: 'bubble-sort',
    name: 'Bubble Sort',
    difficulty: 'easy',
    bestCase: 'n',
    averageCase: 'n2',
    worstCase: 'n2',
    memory: '1',
    stable: true,
    methods: ['Exchanging'],
    implementation: bubbleSort,
  },
  {
    id: 'insertion-sort',
    name: 'Insertion Sort',
    difficulty: 'easy',
    bestCase: 'n',
    averageCase: 'n2',
    worstCase: 'n2',
    memory: '1',
    stable: true,
    methods: ['Insertion'],
    implementation: insertionSort,
  },
  {
    id: 'merge-sort',
    name: 'Merge Sort',
    difficulty: 'medium',
    bestCase: 'nlogn',
    averageCase: 'nlogn',
    worstCase: 'nlogn',
    memory: 'n',
    stable: true,
    methods: ['Merging'],
    implementation: () => [],
  },
];

export default sortingAlgorithms;
