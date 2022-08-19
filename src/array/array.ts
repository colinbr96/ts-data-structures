export function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  let left = arr.slice(0, center);
  let right = arr.slice(center, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

export function iterativeMergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  let working: T[][] = [];
  for (const el of arr) {
    working.push([el]);
  }

  while (working.length > 1) {
    const newWorking: T[][] = [];
    for (let i = 0; i < working.length; i += 2) {
      if (i + 2 > working.length) {
        newWorking.push(working[i]);
        break;
      }
      newWorking.push(merge(working[i], working[i + 1]));
    }
    working = newWorking;
  }
  return working[0];
}

function merge<T>(arr1: T[], arr2: T[]): T[] {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    result = result.concat(arr1.slice(i));
  } else if (j < arr2.length) {
    result = result.concat(arr2.slice(j));
  }
  return result;
}

/**
 * Searches a sorted array of n elements in O(log n) time
 * @param sortedArr Array of sorted elements
 * @param target Element to find within arr
 * @returns Index of target, or -1 if not found
 */
export function binarySearch<T>(sortedArr: T[], target: T): number {
  if (!sortedArr.length) {
    return -1;
  }

  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const middle = Math.floor(left + (right - left) / 2);
    if (target < sortedArr[middle]) {
      right = middle - 1;
    } else if (target > sortedArr[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return sortedArr[left] === target ? left : -1;
}

/**
 * Inserts an element in a sorted array of n elements in O(log n) time
 * @param sortedArr Array of sorted elements
 * @param val Element to insert within arr
 */
export function binaryInsert<T>(sortedArr: T[], val: T): void {
  if (!sortedArr.length) {
    sortedArr.push(val);
    return;
  }

  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const middle = Math.floor(left + (right - left) / 2);
    if (val > sortedArr[middle]) {
      left = middle + 1;
    } else if (val < sortedArr[middle]) {
      right = middle - 1;
    } else {
      left = right = middle;
    }
  }

  if (val < sortedArr[left]) {
    sortedArr.splice(left, 0, val);
  } else {
    sortedArr.splice(left + 1, 0, val);
  }
}
