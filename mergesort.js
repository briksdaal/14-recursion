Array.prototype.mergesort = function () {
    const arrCpy = this.slice();
    mergesort(arrCpy, 0, arrCpy.length);
    return arrCpy;
}

function mergesort (arr, left, right) {
    const n = right - left;
    const middle = Math.floor(left + n / 2);

    if (n < 2)
        return;
    
    mergesort(arr, left, middle);
    mergesort(arr, middle, right);
    merge(arr, left, right);
}

function merge(arr, left, right) {
    const arrCpy = arr.slice();
    const middle = Math.floor(left + (right - left) / 2);

    let i = left;
    let j = middle;
    let k = left;

    while (k < right) {
        if (i < middle && (j === right || arrCpy[i] <= arrCpy[j])) {
            arr[k++] = arrCpy[i++];
        } else {
            arr[k++] = arrCpy[j++];
        }
    }
}

// util functions to test mergesort against js sort
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    return arr1.every((value, index) => value === arr2[index]);
}

function createRandomArraySizeN(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        const randomInt = Math.floor(Math.random() * 100);
        arr.push(randomInt);
    }

    return arr;
}

function testMergesort() {
    let test = true;
    for (let i = 0; i < 100; i++) {
        const unsortedArr = createRandomArraySizeN(i);
        const sortedArrJs = unsortedArr.slice().sort((a, b) => a - b);
        const sortedArrMergesort = unsortedArr.slice().mergesort();
        test = test && arraysEqual(sortedArrJs, sortedArrMergesort);
    }
    return test;
}

console.log(testMergesort());