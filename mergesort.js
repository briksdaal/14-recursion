Array.prototype.mergesort = function () {
    return this.sort((a,b) => a - b);
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