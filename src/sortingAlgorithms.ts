// TODO: set up tests that results are sorted
const selectionSort = (array : number[]) => {
    console.log(array);
    let animations : number[][] = [];
    for (let i : number = 0; i < array.length; i++) {
        let curr = array[i];
        let minIdx = findMinIdx(array, i, array.length);
        animations.push([i, minIdx, array[i], array[minIdx]]);
        animations.push([i, minIdx, array[minIdx], array[i]]);

        array[i] = array[minIdx];
        array[minIdx] = curr;
    }
    return {animations: animations, sortedArray: array};
};

const findMinIdx = (array : number[], start : number, end : number) => {
    // careful when 2 variables are tied together
    let minIdx = start;
    let min = array[start];
    for (let i : number = start; i < end; i++) {
        if (array[i] < min) {
            minIdx = i;
            min = array[i];
        }
    }
    return minIdx;
};

const insertionSort = (array : number[]) => {
    let animations : number[][] = [];
    for (let i : number = 1; i < array.length; i++) {
        let curr : number = array[i];
        let j : number = i - 1;
        while (j >= 0 && array[j] > curr) {
            animations.push([j, j+1, array[j], array[j+1]]);
            animations.push([j, j+1, array[j], array[j]]);

            array[j+1] = array[j];
            j--;
        }

        animations.push([i, j+1, array[i], array[j+1]]);
        animations.push([i, j+1, array[i], array[i]]);
        array[j+1] = curr;
    }
    return {animations: animations, sortedArray: array};
};

const bubbleSort = (array : number[]) => {
    let animations : number[][] = [];
    // TODO: implement
    return {animations: animations, sortedArray: array};
};

const mergeSort = (array : number[]) => {
    let animations : number[][] = [];
    // TODO: implement
    return {animations: animations, sortedArray: array};
};

const heapSort = (array : number[]) => {
    let animations : number[][] = [];
    // TODO: implement
    return {animations: animations, sortedArray: array};
};

export default { insertionSort, selectionSort, bubbleSort, mergeSort, heapSort };