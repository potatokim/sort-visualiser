import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import sortingAlgorithms from "./sortingAlgorithms";

interface IArrayElementComponent {
    value : number
}
const ArrayElementComponent = ({ value } : IArrayElementComponent) => {
    const style = {
        // display: "inline-block",
        // width: 30,
        height: value,
        // color: "white",
        // backgroundColor: "black"
    };
    return (
        <div className="array-element-component" style={style}>{value}</div>
    );
};

interface IArrayComponent {
    data : number[]
}

const ArrayComponent = ({ data } : IArrayComponent) => {
    return (
        <div className="array-component">
            {data.map((e, i) =>  <ArrayElementComponent key={i} value={e} />)}
        </div>
    );
};

// set up app component
const App = () => {
    // set up constants
    const MAX_ARRAY_SIZE = 10;
    const MAX_ARRAY_VAL = 30;

    // set up array state hook
    const [ array, setArray ] = useState<number[]>([]);

    // set initial array state
    useEffect(() => {
        const initialArray = new Array(generateRandomNumber(MAX_ARRAY_SIZE)).fill(0)
            .map(() => generateRandomNumber(MAX_ARRAY_VAL));
        setArray(initialArray);
    }, []);

    // TODO: set up function returns function handler + enum type
    const sort = (array : number[], sortingAlgorithm : string) => {
        switch (sortingAlgorithm) {
            case "selection":   setArray(sortingAlgorithms.selectionSort([...array]));  break;
            case "insertion":   setArray(sortingAlgorithms.insertionSort([...array]));  break;
            case "bubble":      setArray(sortingAlgorithms.bubbleSort([...array]));     break;
            case "merge":       setArray(sortingAlgorithms.mergeSort([...array]));      break;
            case "heap":        setArray(sortingAlgorithms.heapSort([...array]));       break;
        }

    };

    const generateRandomNumber = (max : number) => {
        return Math.floor(Math.random() * max);
    };

    // render button and array visually
    return (
        <div>
            <ArrayComponent data={array} />
            <button onClick={() => sort(array, "selection")}>Selection Sort!</button>
            <button onClick={() => sort(array, "insertion")}>Insertion Sort!</button>
            <button onClick={() => sort(array, "ibubble")}>Bubble Sort!</button>
            <button onClick={() => sort(array, "merge")}>Merge Sort!</button>
            <button onClick={() => sort(array, "heap")}>Heap Sort!</button>
        </div>
    );

};

ReactDOM.render(<App />, document.getElementById('root'));

