import React, { useState, useRef } from "react";

function SelectDivComp(props) {
 /* VARIABLES */
    const [isSelected, setIsSelected] = useState<Boolean>(props.state || false)
    const selectedData = props.id

 /* FUNCTIONS */
    function handleClickBox() {
        const uState: Boolean = !isSelected;
        setIsSelected(p => (!p));

        props.fn1(selectedData, uState)
    }

 /* STYLES */
    let clickBoxStyle = {
        backgroundColor: isSelected ? 'black' : 'transparent'
    }

    const mainStyle = {
        width: props.wid,
        height: props.he,
        borderRadius: props.brr
    }

    const subTxtStyle = {
        fontSize: props.sfs,
    
    }

 /* RETURN */
    return(
        <div id="selectdiv_comp_main" style={{...mainStyle }}> 
            <div id="first_div" >
                <p>{props.serial}</p>

                <div>
                    <h3>{props.main}</h3>
                    <p style={{...subTxtStyle}}>{props.sub}</p>
                </div>

            </div>

            <div id="second_div" style={clickBoxStyle} onClick={handleClickBox}></div>

        </div>
    )
}

export default SelectDivComp