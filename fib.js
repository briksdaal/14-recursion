// n = 8, arr = [0, 1, 1, 2, 3, 5, 8, 13]

function fibs (n) {
    if (n === 0)
        return [];
    if (n === 1)
        return [0];

    let arr = [0, 1];

    for (let i = 2; i < n; i++) {
        arr = arr.concat(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

function fibsRec(n) {
    if (n === 0)
        return [];
    if (n === 1)
        return [0];
    if (n === 2)
        return [0, 1];
    
    const prevArr = fibsRec(n - 1);

    return [...prevArr, prevArr[n - 2] + prevArr[n - 3]];
}

console.log(fibsRec(0))
console.log(fibsRec(1))
console.log(fibsRec(2))
console.log(fibsRec(8))
console.log(fibsRec(20))