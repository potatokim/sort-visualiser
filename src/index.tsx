import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import sortingAlgorithms from "./sortingAlgorithms";
import ArrayComponent from "./components/ArrayComponent";

// set up app component
const App = () => {
    // set up constants
    const MAX_ARRAY_SIZE = 30;
    const MAX_ARRAY_VAL = 100;
    const ANINMATION_SPEED = 200;

    // set up array state hook
    const [ array, setArray ] = useState<number[]>([]);

    const resetArray = () => {
        const initialArray = new Array(generateRandomNumber(MAX_ARRAY_SIZE)).fill(0)
            .map(() => generateRandomNumber(MAX_ARRAY_VAL));
        setArray(initialArray);
    };

    // set initial array state
    useEffect(resetArray, []);

    const sort = async (sortingAlgorithm : string) =>  {
        // TODO: error message
        const sortingFunc = getSortingFunc(sortingAlgorithm);
        if (sortingFunc) {
            const {animations, sortedArray} = sortingFunc([...array]);
            await animate(animations);
            setArray(sortedArray);
        }
    };

    const getSortingFunc =
        (sortingAlgorithm : string) : (array : number[]) => {animations : number[][], sortedArray : number[]} => {
        switch (sortingAlgorithm) {
            case "selection":   return sortingAlgorithms.selectionSort;
            case "insertion":   return sortingAlgorithms.insertionSort;
            case "bubble":      return sortingAlgorithms.bubbleSort;
            case "merge":       return sortingAlgorithms.mergeSort;
            case "heap":        return sortingAlgorithms.heapSort;
            default:            return sortingAlgorithms.selectionSort;
        }
    };
    const animate = (animations : number[][]) => {
        const arrayElements =
            Array.from(document.getElementsByClassName("array-element-component")) as unknown as HTMLCollectionOf<HTMLElement>;
        return new Promise((resolve) => {
            for (let i = 0; i < animations.length; i++) {
                setTimeout(() => {
                    const color = i % 2 ?  "cadetblue" : "lightcoral";
                    arrayElements[animations[i][0]].style.backgroundColor = color;
                    arrayElements[animations[i][1]].style.backgroundColor = color;
                    arrayElements[animations[i][0]].style.height = `${animations[i][2]}px`;
                    arrayElements[animations[i][1]].style.height = `${animations[i][3]}px`;
                    if (i === animations.length - 1) resolve("animate");
                }, i * ANINMATION_SPEED);
            }
        });
    };

    const generateRandomNumber = (max : number) => {
        return Math.floor(Math.random() * max);
    };

    // render button and array visually
    return (
        <div>
            <ArrayComponent data={array} />
            <button onClick={resetArray}>Reset Array</button>
            <button onClick={() => sort("selection")}>Selection Sort!</button>
            <button onClick={() => sort("insertion")}>Insertion Sort!</button>
            <button onClick={() => sort("bubble")}>Bubble Sort!</button>
            <button onClick={() => sort("merge")}>Merge Sort!</button>
            <button onClick={() => sort("heap")}>Heap Sort!</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

