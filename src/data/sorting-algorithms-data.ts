import bubbleSort from '../logic/bubble-sort';
import combSort from '../logic/comb-sort';
import heapSort from '../logic/heap-sort';
import insertionSort from '../logic/insertion-sort';
import mergeSort from '../logic/merge-sort';
import quickSort from '../logic/quick-sort';
import selectionSort from '../logic/selection-sort';
import shellSort from '../logic/shell-sort';
import timSort from '../logic/tim-sort';
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
    implementation: mergeSort,
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    difficulty: 'medium',
    bestCase: 'nlogn',
    averageCase: 'nlogn',
    worstCase: 'n2',
    memory: 'logn',
    stable: false,
    methods: ['Partitioning'],
    implementation: quickSort,
  },
  {
    id: 'heap-sort',
    name: 'Heap Sort',
    difficulty: 'medium',
    bestCase: 'nlogn',
    averageCase: 'nlogn',
    worstCase: 'nlogn',
    memory: '1',
    stable: false,
    methods: ['Selection'],
    implementation: heapSort,
  },
  {
    id: 'shell-sort',
    name: 'Shell Sort',
    difficulty: 'medium',
    bestCase: 'nlogn',
    averageCase: 'n4/3',
    worstCase: 'n3/2',
    memory: '1',
    stable: false,
    methods: ['Insertion'],
    implementation: shellSort,
  },
  {
    id: 'tim-sort',
    name: 'Tim Sort',
    difficulty: 'medium',
    bestCase: 'n',
    averageCase: 'nlogn',
    worstCase: 'nlogn',
    memory: 'n',
    stable: true,
    methods: ['Insertion', 'Merging'],
    implementation: timSort,
  },
  {
    id: 'comb-sort',
    name: 'Comb Sort',
    difficulty: 'easy',
    bestCase: 'nlogn',
    averageCase: 'n2',
    worstCase: 'n2',
    memory: '1',
    stable: false,
    methods: ['Exchanging'],
    implementation: combSort,
  },
];

export default sortingAlgorithms;
