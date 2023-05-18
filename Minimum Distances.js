function minimumDistances(a) {
    let minV = 1000
    for (let i=0; i<a.length; i++) {
        for(let j=i+1; j<a.length; j++){
            if(a[i]==a[j] && j-i<minV) {minV = j-i}
        }
    }
    if (minV==1000) {minV=-1}
    return minV
}
