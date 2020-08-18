import React from "react";

const RadioButton = ({name, value, checked} : {name : string, value : number, checked? : boolean}) => {
    return (
        <>
            <label><input type="radio" name={name} value={value} checked={checked}></input> {value}</label>

        </>
    );
};

const ArraySizeOptions = () => {
    return (
        <div className="array-size-options">
            <label>
                Array Size:
                <RadioButton name="arraySize" value={30} />
                <RadioButton name="arraySize" value={60} />
                <RadioButton name="arraySize" value={90} />
            </label>

        </div>
    );
};

const AnimationSpeedOptions = () => {
    return (
        <div className="animation-speed-options">
            <label>
                Animation Speed:
                <RadioButton name="animationSpeed" value={100} />
                <RadioButton name="animationSpeed" value={50} />
                <RadioButton name="animationSpeed" value={20} />
            </label>
        </div>
    );
};

interface IMenuBarProps {
    resetArray : () => void,
    sort : (sortingAlgorithm : string) => Promise<void>
}
const MenuBar = ({ resetArray, sort} : IMenuBarProps) => {
    return (
        <div className="menu-bar">
            <button onClick={resetArray}>Reset Array</button>
            <button onClick={() => sort("selection")}>Selection Sort</button>
            <button onClick={() => sort("insertion")}>Insertion Sort</button>
            <button onClick={() => sort("bubble")}>Bubble Sort</button>
            <button onClick={() => sort("merge")}>Merge Sort</button>
            <button onClick={() => sort("heap")}>Heap Sort</button>
            <ArraySizeOptions />
            <AnimationSpeedOptions />
        </div>
    );
};

export default MenuBar;
