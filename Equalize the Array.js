function equalizeArray(arr) {
    // descobrir qtos numeros tem de cada
    const number_qnts = {}
    let maxOccurencyNumber
    let leaveNumbers = 0
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in number_qnts)) {
            number_qnts[arr[i]] = 0
        }
        number_qnts[arr[i]]++
        // guardar o número q tem mais ocorrências no array
        if (!maxOccurencyNumber || number_qnts[arr[i]] > number_qnts[maxOccurencyNumber]) {
            maxOccurencyNumber = arr[i]
        }
    }
    // contar os números q são diferentes do de maior ocorrência
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != maxOccurencyNumber) {
            leaveNumbers++
        }
    }
    // retornar essa contagem
    console.log(leaveNumbers)
    return leaveNumbers
}
equalizeArray([4, 3, 7, 9 ,20, 14, 2, 3, 3, 7, 18, 18, 1, 9, 9, 2, 7, 6, 12, 19, 4])