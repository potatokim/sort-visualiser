import sortingAlgorithms from "./sortingAlgorithms";
const MIN_ARRAY_SIZE = 5;
const MAX_ARRAY_SIZE = 10;
const MIN_ARRAY_VAL = 0;
const MAX_ARRAY_VAL = 500;

const generateRandomNumber = (max : number, min : number) : number => {
    return Math.floor(Math.random() * (max - min) + min);
};


const test = () => {
    const initialArray = new Array(generateRandomNumber(MAX_ARRAY_SIZE, MIN_ARRAY_SIZE)).fill(0)
        .map(() => generateRandomNumber(MAX_ARRAY_VAL, MIN_ARRAY_VAL));
    const result = sortingAlgorithms.mergeSortTest(initialArray);
    console.log("test result: ", result);
};

export default test;