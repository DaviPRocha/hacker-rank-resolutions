function introTutorial(V, arr) {
    let position
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == V) {
            position = i
        }
    }
    console.log(position)
    return position
}

introTutorial(3, [7,7,7,75,4,3,4,1,68,6,5,4,78,6,1,2,5,4,6,7])