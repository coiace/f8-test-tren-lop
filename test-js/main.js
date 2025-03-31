function isEvent(number) {
    if(number % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

function reverseString(str) {
    let string = str.split('').reverse().join('')
    console.log(string)
}

let sum = 0
for(let i = 1; i <= 100; i++) {
    sum += i;
}

function isPrime(number) {
    let check = true
    if(number > 1) {
        for(let i = 2; i < Math.sqrt(number); i++) {
            if(number % i === 0) {
                check = false
            }
        }
    } else {
        check = false
    }
    if(check) {
        console.log("Số nguyên tố")
    } else {
        console.log("Không phải là số nguyên tố")
    }
}

function maxNumber(arr) {
    let max = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[0])) {
            if(arr[1] > max)
            max = arr[i]
        }
    }
    console.log(max)
}

function countVowels(str) {
    let string = str.split('')
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            count++
        }
    }
    console.log(count)
}

function removeDuplicates(arr) {
    let arrNew = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            
        } 
    }
    console.log(arr)
}
let a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 9]
removeDuplicates(a)

function isSquare(n) {
    var check = false
    for (var i = 0; i <= Math.sqrt(n); i++) {
        if(i**2 === n) {
            check = true
        }
    }
    return check
}

function deepClone(obj) {
    let obJNew = {...obj}
    return obJNew
}

