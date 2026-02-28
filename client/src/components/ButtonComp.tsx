import React, { BaseSyntheticEvent } from "react";

function ButtonComp(props) {

 /* VARIABLES */

 /* FUNCTIONS */
    function defFN(e: BaseSyntheticEvent) {
        const {id, className, innerHTML} = e.target
    }

 /* STYLES */
    const mainStyle = {
        height: props.he,
        width: props.wid,
        borderRadius: props.brr,
        marginTop: props.mt
        
    }

 /* RETURN */
    return(
        <button id="button_comp_main" style={{...mainStyle}} onClick={
            e => {defFN(e); props.fn1 && props.fn1(e.target) }
        }>
            {props.txt || "Click Me"}
        </button>
    )

}

export default ButtonComp