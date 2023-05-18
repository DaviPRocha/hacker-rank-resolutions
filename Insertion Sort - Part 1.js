function insertionSort1(n, arr) {
    let x=arr[n-1]
    for(let i=n-2; i>=-1; i--) {
        if(arr[i]>x) {arr.splice(i+1, 1, arr[i])}
        else{arr.splice(i+1, 1, x), i = -1}
        console.log(arr.join(' '))
    }
}
