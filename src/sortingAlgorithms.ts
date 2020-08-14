// TODO: set up tests that results are sorted
const insertionSort = (array : number[]) => {
    console.log("initial: ", array);
    for (let i : number = 1; i < array.length; i++) {
        let curr : number = array[i];
        for (let j : number = 0; j < i; j++) {
            if (curr < array[j]) {
                for (let k : number = i; k > j; k--) array[k] = array[k-1];
                array[j] = curr;
                break;
            }
        }
    }
    console.log("sorted: ", array);
    return array;
};

const selectionSort = (array : number[]) => {
    // TODO: implement
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