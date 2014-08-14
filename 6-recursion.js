function reduce(arr, fn, initial, idx) {
  idx = idx || 0;

  if (idx >= arr.length) { return initial; }

  initial = fn(initial, arr[idx], idx, arr);
  return reduce(arr, fn, initial, idx + 1);
}

module.exports = reduce;
