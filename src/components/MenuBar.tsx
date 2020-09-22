import React from "react";

const RadioButton =
    ({name, value, checked, onChangeFnc} :
         {name : string, value : number, checked? : boolean, onChangeFnc : (newValue : number) => void}) => {
    return (
        <>
            <label><input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChangeFnc(value)}></input> {value}</label>

        </>
    );
};

const ArraySizeOptions = ({ onChangeArraySize } : {onChangeArraySize : (newArraySize : number) => void}) => {
    return (
        <div className="array-size-options">
            <label>
                Max Array Size:
                <RadioButton name="arraySize" value={30} onChangeFnc={onChangeArraySize} />
                <RadioButton name="arraySize" value={60} onChangeFnc={onChangeArraySize} />
                <RadioButton name="arraySize" value={90} onChangeFnc={onChangeArraySize} />
            </label>

        </div>
    );
};

const AnimationSpeedOptions = ({ onChangeAnimationSpeed } : {onChangeAnimationSpeed : (newAnimationSpeed : number) => void}) => {
    return (
        <div className="animation-speed-options">
            <label>
                Animation Speed:
                <RadioButton name="animationSpeed" value={0.5} onChangeFnc={onChangeAnimationSpeed} />
                <RadioButton name="animationSpeed" value={1} onChangeFnc={onChangeAnimationSpeed} />
                <RadioButton name="animationSpeed" value={2} onChangeFnc={onChangeAnimationSpeed} />
            </label>
        </div>
    );
};

interface IMenuBarProps {
    resetArray : () => void,
    sort : (sortingAlgorithm : string) => Promise<void>
    onChangeArraySize : (newArraySize : number) => void;
    onChangeAnimationSpeed : (newAnimationSpeed : number) => void;
}
const MenuBar = ({ resetArray, sort, onChangeArraySize, onChangeAnimationSpeed} : IMenuBarProps) => {
    return (
        <div className="menu-bar">
            <button onClick={resetArray}>Reset Array</button>
            <button onClick={() => sort("selection")}>Selection Sort</button>
            <button onClick={() => sort("insertion")}>Insertion Sort</button>
            <button onClick={() => sort("bubble")}>Bubble Sort</button>
            <button onClick={() => sort("merge")}>Merge Sort</button>
            <button onClick={() => sort("heap")}>Heap Sort</button>
            <ArraySizeOptions onChangeArraySize={onChangeArraySize} />
            <AnimationSpeedOptions onChangeAnimationSpeed={onChangeAnimationSpeed} />
        </div>
    );
};

export default MenuBar;
