import React from "react";

function InputComp(props) {

 /* STYLES */
    const mainStyle = {
        height: props.he,
        width: props.wid
    }

    const subStyle = {
        height: props.he2,
        width: props.wid2
    }

 /* RETURN */
    return(
        <div id="input_comp_main" style={subStyle}>
            <label>{props.label}</label>

            <input 
                style={mainStyle}
                value={props.value}
                onChange={e => {props.fn1(e.target)} }
                id={props.id}
                placeholder={props.placeholder}
                type={props.type || 'text'}
            />
        </div>
    )
}

export default InputComp