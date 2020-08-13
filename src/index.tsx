import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./sortingAlgos";

interface IArrayElementComponent {
    value : number
}
const ArrayElementComponent = ({ value } : IArrayElementComponent) => {
    const style = {
        display: "inline-block",
        width: 30,
        height: value,
        color: "white",
        backgroundColor: "black"
    };
    return (
        <div style={style}>{value}</div>
    );
};

interface IArrayComponent {
    data : number[]
}

const ArrayComponent = ({ data } : IArrayComponent) => {
    return (
        <div>
            {data.map((e, i) =>  <ArrayElementComponent key={i} value={e} />)}
        </div>
    );
};

// set up app component
const App = () => {
    // set up constants
    const MAX_ARRAY_SIZE = 30;
    const MAX_ARRAY_VAL = 30;

    // set up array state hook
    const [ array, setArray ] = useState<number[]>([]);

    // set initial array state
    useEffect(() => {
        const initialArray = new Array(generateRandomNumber(MAX_ARRAY_SIZE)).fill(0)
            .map(() => generateRandomNumber(MAX_ARRAY_VAL));
        setArray(initialArray);
    }, []);

    // helper: sort algorithm that call state-change handler
    // TODO: this is wrong lmao
    const sort = (array : number[]) => {
        let sortedArray = [...array];
        for (let i = 0; i < 20; i++) {
            sortedArray.forEach((e, i) => {
                if (i < sortedArray.length - 1) {
                    if (e > sortedArray[i+1]) {
                        const temp = e;
                        sortedArray[i] = sortedArray[i+1];
                        sortedArray[i+1] = temp;
                        setArray(sortedArray);
                    }
                }
            });
        }
    };

    const generateRandomNumber = (max : number) => {
        return Math.floor(Math.random() * max);
    };

    // render button and array visually
    return (
        <div>
            <ArrayComponent data={array} />
            <button onClick={() => sort(array)}>Sort!</button>
        </div>
    );

};

ReactDOM.render(<App />, document.getElementById('root'));

