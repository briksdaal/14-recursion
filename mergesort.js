Array.prototype.mergesort = function () {
    mergesort(this, 0, this.length, this.slice());
    return this;
}

function mergesort (arr, left, right, aux) {
    const n = right - left;
    const middle = Math.floor(left + n / 2);

    if (n < 2)
        return;
    
    mergesort(aux, left, middle, arr);
    mergesort(aux, middle, right, arr);
    merge(arr, left, right, aux);
}

function merge(arr, left, right, aux) {
    const middle = Math.floor(left + (right - left) / 2);

    let i = left;
    let j = middle;
    let k = left;

    while (k < right) {
        if (i < middle && (j === right || aux[i] <= aux[j])) {
            arr[k++] = aux[i++];
        } else {
            arr[k++] = aux[j++];
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