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
