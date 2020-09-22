// TODO: set up tests that results are sorted
const selectionSort = (array : number[]) => {
    console.log(array);
    let animations : number[][] = [];
    for (let i : number = 0; i < array.length; i++) {
        let curr = array[i];
        let minIdx = findMinIdx(array, i, array.length);
        // swapping animation:
        // original:    i<-array[i] minIdx<-array[minIdx]
        // swapped:     i<-array[minIdx] minIdx<-array[i]
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
            // shifting animation:
            // original: j<-array[j], j+1<-array[j+1]
            // shifted: j<-array[j], j+1<-array[j]
            animations.push([j, j+1, array[j], array[j+1]]);
            animations.push([j, j+1, array[j], array[j]]);

            array[j+1] = array[j];
            j--;
        }

        // overwriting animation:
        // original: j+1<-array[j+1]
        // overwritten: j+1<-array[i]
        animations.push([j+1, array[j+1]]);
        animations.push([j+1, curr]);
        array[j+1] = curr;
    }
    return {animations: animations, sortedArray: array};
};

const bubbleSort = (array : number[]) => {
    let animations : number[][] = [];
    // TODO: implement
    return {animations: animations, sortedArray: array};
};

// TODO: rethink animation
const mergeSort = (array : number[]) => {
    let animations : number[][] = [];
    if (array.length >= 2) {
        const midIdx = Math.floor(array.length / 2);
        let leftArray : number[] = [];
        let rightArray: number[] = [];
        for (let i = 0; i < midIdx; i++) leftArray[i] = array[i];
        for (let j = midIdx; j < array.length; j++) rightArray[j-midIdx] = array[j];
        mergeSort(leftArray);
        mergeSort(rightArray);
        let i, j, k : number;
        i = j = k = 0;
        // console.log("total: ", array);
        // console.log("left: ", leftArray);
        // console.log("right: ", rightArray);
        while (k < array.length) {
            animations.push([k, array[k]]);
            if (i >= leftArray.length) {
                // placement animation (from auxiliary arrays in original array):
                // original: k->array[k]
                // placed: k->rightArray[j]
                animations.push([k, rightArray[j]]);
                array[k] = rightArray[j];
                j++;
            } else if (j >= rightArray.length) {
                animations.push([k, leftArray[i]]);
                array[k] = leftArray[i];
                i++;
            } else {
                if (leftArray[i] < rightArray[j]) {
                    animations.push([k, leftArray[i]]);
                    array[k] = leftArray[i];
                    i++;
                } else {
                    animations.push([k, rightArray[j]]);
                    array[k] = rightArray[j];
                    j++;
                }
            }
            k++;
        }
    }
    return {animations: animations, sortedArray: array};
};

const heapSort = (array : number[]) => {
    let animations : number[][] = [];
    // TODO: implement
    return {animations: animations, sortedArray: array};
};

const testSort = (array : number[]) => {
    console.log("intial: ", array);
    let animations : number[][] = [];
    console.log("sorted: ", array);
    return {animations: animations, sortedArray: array};
};

export default { insertionSort, selectionSort, bubbleSort, mergeSort, heapSort, testSort };