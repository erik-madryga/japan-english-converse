import React from "react";

const DrygaModal = props => {
    if (!props.show){
        return null
    }
    return (
        <div>
            <div>
            <h4>Dryga created this</h4>
        </div>
        <div>
            <button onClick={props.onClose}>Close</button>
        </div>
        </div>

    )
}

export default DrygaModal