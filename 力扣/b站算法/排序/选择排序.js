var arr = [1,2,4,5,3,4,5,6]


function sort (arr) {
    for(var i = 0; i < arr.length;i++) {
        var min = i
        for(var j = i + 1;j < arr.length;j++) {
            if (arr[j] > arr[min]) {
                [arr[min],arr[j]] = [arr[j],arr[min]]
            }
        }
    }
    return arr
}

console.log(sort(arr));