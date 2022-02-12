var arr = [1,2,4,5,3,4,5,6]


function sort (arr) {
    for (let i = 0; i < arr.length; i++) {
        var item = arr[i]
        var  j = i - 1
        while(item < arr[j] && j >= 0) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = item
    }
    return arr
}

console.log(sort(arr));