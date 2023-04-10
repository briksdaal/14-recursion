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

function fibsRecOneLiner(n, arr = [0, 1]) {
    return n <= arr.length ? arr.slice(0, n) : fibsRecOneLiner(n, [...arr, arr[arr.length - 1] + arr[arr.length - 2]])
}

let test = true;
for (let i = 0; i < 100; i++) {
    arr1 = fibs(i);
    arr2 = fibsRec(i);
    arr3 = fibsRecOneLiner(i);
    if (!(arrayEquality(arr1, arr2) && arrayEquality(arr1, arr3)))
        test = false;
}

console.log(test);

function arrayEquality(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    return arr1.every((el, index) => el === arr2[index]);
}