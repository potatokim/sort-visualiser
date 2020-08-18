import React from "react";

interface IArrayElementComponent {
    value : number
}
const ArrayElementComponent = ({ value } : IArrayElementComponent) => {
    const style = {
        height: value,
    };
    return (
        <div className="array-element-component" style={style}></div>
    );
};

export default ArrayElementComponent;