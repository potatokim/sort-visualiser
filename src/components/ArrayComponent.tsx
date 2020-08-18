import ArrayElement from "./ArrayElement";
import React from "react";

interface IArrayComponent {
    data : number[]
}

const ArrayComponent = ({ data } : IArrayComponent) => {
    return (
        <div className="array-component">
            {data.map((e, i) =>  <ArrayElement key={i} value={e} />)}
        </div>
    );
};

export default ArrayComponent;