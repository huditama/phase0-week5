function totalDigitRekursif(angka) {
    var string = String(angka)
    
    if (string.length === 0) {
        return 0
    } else {
        var firstNum = string.slice(0, 1)
        var lastNum = string.slice(1, angka.length)
        return Number(firstNum) + Number(totalDigitRekursif(lastNum))
    }
}
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5