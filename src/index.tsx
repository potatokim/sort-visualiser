import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import Title from "./components/Title";
import MenuBar from "./components/MenuBar";
import ArrayComponent from "./components/ArrayComponent";
import sortingAlgorithms from "./sortingAlgorithms";
// import test from "./tests";

const App = () => {
    // set up constants
    const MIN_ARRAY_SIZE = 5;
    const MAX_ARRAY_SIZE = 30;
    const MIN_ARRAY_VAL = 0;
    const MAX_ARRAY_VAL = 470;
    const ANINMATION_SPEED = 200;

    // set up array state hook
    const [ array, setArray ] = useState<number[]>([]);
    const [ animationSpeed, setAnimationSpeed ] = useState<number>(ANINMATION_SPEED);
    const [ maxArraySize, setMaxArraySize ] = useState<number>(MAX_ARRAY_SIZE);

    const resetArray = () : void => {
        const initialArray = new Array(generateRandomNumber(maxArraySize, MIN_ARRAY_SIZE)).fill(0)
            .map(() => generateRandomNumber(MAX_ARRAY_VAL, MIN_ARRAY_VAL));
        console.log(initialArray); // for testing recursive func
        setArray(initialArray);
    };

    // set initial array state
    useEffect(resetArray, []);
    // useEffect(test, []); // uncomment to test

    const handleChangeArraySize = (newMaxArraySize : number) => {
        setMaxArraySize(newMaxArraySize);
    };

    const handleChangeAnimationSpeed = (newAnimationSpeed : number) => {
        setAnimationSpeed(newAnimationSpeed);
    };

    const sort = async (sortingAlgorithm : string) : Promise<void> =>  {
        // TODO: error message
        const sortingFunc = getSortingFunc(sortingAlgorithm);
        if (sortingFunc) {
            const {animations, sortedArray} = sortingFunc([...array]);
            await animate(animations);
            setArray(sortedArray);
        }
    };

    const getSortingFunc =
        (sortingAlgorithm : string) : (array : number[]) => { animations : number[][], sortedArray : number[] } => {
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
                // animation = [changing indices and values, changed indices, changing indices, changed indices, ...]
                setTimeout(() => {
                    const color = i % 2 ?  "cadetblue" : "lightcoral";
                    // TODO: change to pair<int, int> ie. pair<index, value> data type
                    if (animations[i].length > 2) {
                        console.log(animations[i]);
                        arrayElements[animations[i][0]].style.backgroundColor = color;
                        arrayElements[animations[i][0]].style.height = `${animations[i][2]}px`;
                        arrayElements[animations[i][1]].style.backgroundColor = color;
                        arrayElements[animations[i][1]].style.height = `${animations[i][3]}px`;
                    } else {
                        arrayElements[animations[i][0]].style.backgroundColor = color;
                        arrayElements[animations[i][0]].style.height = `${animations[i][1]}px`;
                    }
                    if (i === animations.length - 1) resolve("animate");
                }, i * ANINMATION_SPEED / animationSpeed);
            }
        });
    };

    const generateRandomNumber = (max : number, min : number) : number => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    return (
        <div>
            <Title />
            <MenuBar
                resetArray={resetArray}
                sort={sort}
                onChangeArraySize={handleChangeArraySize}
                onChangeAnimationSpeed={handleChangeAnimationSpeed}
            />
            <ArrayComponent data={array} />
            <p style={{color: "darkgray", textAlign: "right"}}>
                Animation for Selection and Insertion Sort are ready. Others are work in progress.
            </p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

