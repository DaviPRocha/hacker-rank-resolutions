function sockMerchant(ar) {
    const number_qnts = {}
    let sockPairs = 0
    for (let i = 0; i < ar.length; i++) {
        if (!(ar[i] in number_qnts)) {
            number_qnts[ar[i]] = 0
        }
        number_qnts[ar[i]]++
    }
    for (const [sockNumber, qnts] of Object.entries(number_qnts)) {
        sockPairs += Math.floor(qnts / 2)
    }
    console.log(sockPairs)
    return sockPairs
}
sockMerchant([1,1,1,2,3,4,5,23,3,2,4,57,8,1])