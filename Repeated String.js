function repeatedString(s, n) {
    let aAmount = 0
    for(let i=0; i<s.length; i++) {
        if (s[i] == 'a') {
            aAmount++
        }
    }
    let j = 0
    let aQtt = Math.floor(n/s.length) * aAmount
    while(j<n - Math.floor(n/s.length) * s.length) {if(s[j] == 'a') {aQtt++}; j++}
    return aQtt
}
