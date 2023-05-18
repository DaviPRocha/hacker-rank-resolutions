function insertionSort2(n, arr) {
    for(let i=1; i<n; i++) {
        let j=i-1
        let x
        while(j>=0) {
            if((!x || arr[x] > arr[j]) && arr[j] > arr[i]) {
                x = j
            }
            j--
        }
        if(x !== undefined) {
            let z = arr.splice(i, 1)
            arr.splice(x, 0, z[0])
        }
        console.log(arr.join(' '))
    }
}
