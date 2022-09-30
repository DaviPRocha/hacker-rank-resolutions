function jumpingOnClouds(c) {
    let i = 0
    let jumps = 0
    while(i < c.length) {
        if(c[i] == c[i + 1]) {
            if(c[i] == c[i + 2]){
                jumps += 1
                i += 2 
            }else {
                jumps += 1
                i += 1 
            }
        }else {
            if(c[i] == c[i + 2]) {
                jumps += 1
                i += 2
            }else {i+=1}
        }
    }
    console.log(jumps)
    return jumps
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])