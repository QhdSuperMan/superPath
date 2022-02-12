var arr = [1,2,4,5,3,4,5,6]


function sort (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr
}

console.log(sort(arr));