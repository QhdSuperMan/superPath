var arr = [1, 2, 4, 5, 3, 4, 5, 6];

function sort(arr) {
  var step = Math.floor(arr.length / 2);
  while (step > 0) {
    for (let i = 0; i < arr.length; i++) {
      var item = arr[i];
      var j = i - step;
      while (item < arr[j] && j >= 0) {
        arr[j + step] = arr[j];
        j -= step;
      }
      arr[j + step] = item;
    }
    step = Math.floor(step / 2);
  }
  return arr;
}

console.log(sort(arr));
