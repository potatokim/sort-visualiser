// TODO: set up tests that results are sorted
const selectionSort = (array : number[]) => {
    console.log("initial: ", array);
    for (let i : number = 0; i < array.length; i++) {
        let curr = array[i];
        let minIdx = findMinIdx(array, i, array.length);
        array[i] = array[minIdx];
        array[minIdx] = curr;
    }
    console.log("sorted: ", array);
    return array;
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
    console.log("initial: ", array);
    for (let i : number = 1; i < array.length; i++) {
        let curr : number = array[i];
        // for (let j : number = 0; j < i; j++) {
        //     if (curr < array[j]) {
        //         for (let k : number = i; k > j; k--) array[k] = array[k-1];
        //         array[j] = curr;
        //         break;
        //     }
        // }
        let j : number = i - 1;
        while (j >= 0 && array[j] > curr) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = curr;
    }
    console.log("sorted: ", array);
    return array;
};

const bubbleSort = (array : number[]) => {
    // TODO: implement
    return array;
};

const mergeSort = (array : number[]) => {
    // TODO: implement
    return array;
};

const heapSort = (array : number[]) => {
    // TODO: implement
    return array;
};

export default { insertionSort, selectionSort, bubbleSort, mergeSort, heapSort };