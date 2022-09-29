function camelcase(s) {
    let wordsQtts = 1
    for (let i = 0; i < s.length; i++) {
        if(s[i] !== s[i].toLowerCase()) {
            wordsQtts += 1
        }
    }
    console.log(wordsQtts)
    return wordsQtts
}

camelcase('saveChangesInTheEditor')