import ArrayElementComponent from "./ArrayElementComponent";
import React from "react";

interface IArrayComponentProps {
    data : number[]
}

const ArrayComponent = ({ data } : IArrayComponentProps) => {
    return (
        <div className="array-component">
            {data.map((e, i) =>  <ArrayElementComponent key={i} value={e} />)}
        </div>
    );
};

export default ArrayComponent;