export function bubbleSort<T>(array: T[]): T[] {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

// Insertion sort.
export function insertionSort<T>(array: T[]): T[] {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }

  return array;
}

// Heap sort.
// export function heapSort<T>(array: T[]): T[] {
//   // Build a max heap.
//   for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
//     heapify(array, i);
//   }

//   // Sort the heap.
//   for (let i = array.length - 1; i > 0; i--) {
//     // Swap the first and last elements of the heap.
//     const temp = array[0];
//     array[0] = array[i];
//     array[i] = temp;

//     // Heapify the remaining heap.
//     heapify(array, 0);
//   }

//   return array;
// }

// function heapify<T>(array: T[], i: number): void {
//   const left = 2 * i + 1;
//   const right = 2 * i + 2;

//   let largest = i;
//   if (left < array.length && array[left] > array[largest]) {
//     largest = left;
//   }
//   if (right < array.length && array[right] > array[largest]) {
//     largest = right;
//   }

//   if (largest !== i) {
//     // Swap the largest element with the current element.
//     const temp = array[largest];
//     array[largest] = array[i];
//     array[i] = temp;

//     // Heapify the remaining heap.
//     heapify(array, largest);
//   }
// }

// Heapify a subtree rooted at index i.
function heapify<T>(array: T[], n: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If the left child is larger than the root.
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // If the right child is larger than the largest so far.
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If the largest element is not the root.
  if (largest !== i) {
    const temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    // Recursively heapify the affected sub-tree.
    heapify(array, n, largest);
  }
}

export function heapSort<T>(array: T[]): T[] {
  const n = array.length;

  // Build a max heap.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  // Extract elements from the heap one by one.
  for (let i = n - 1; i > 0; i--) {
    // Move the current root to the end.
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    // Call heapify on the reduced heap.
    heapify(array, i, 0);
  }

  return array;
}


// Merge sort.
export function mergeSort<T>(array: T[]): T[] {
  if (array.length <= 1) {
    return array;
  }

  // Divide the array into two halves.
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  // Merge the two sorted halves.
  return merge(left, right);
}

function merge<T>(left: T[], right: T[]): T[] {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  result.push(...left.slice(i));
  result.push(...right.slice(j));

  return result;
}

// Quick sort.
export function quickSort<T>(array: T[]): T[] {
  if (array.length <= 1) {
    return array;
  }

  // Choose a pivot element.
  const pivot = array[0];

  // Partition the array around the pivot.
  const [less, equal, greater] = partition(array, pivot);

  // Sort the less and greater subarrays.
  const sortedLess = quickSort(less);
  const sortedGreater = quickSort(greater);
  return [...sortedLess, ...equal, ...sortedGreater];
}

function partition<T>(array: T[], pivot: T): [T[], T[], T[]] {
  const less = [];
  const equal = [];
  const greater = [];

  for (const number of array) {
    if (number < pivot) {
      less.push(number);
    } else if (number === pivot) {
      equal.push(number);
    } else {
      greater.push(number);
    }
  }

  return [less, equal, greater];
}

// Selection sort.
export function selectionSort<T>(array: T[]): T[] {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the smallest element with the current element.
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}
