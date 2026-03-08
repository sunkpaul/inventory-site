import React, { useState } from "react";

function DropDownComp(props) {
 /* VARIABLES */
    const [headerTxt, setHeaderTxt] = useState<String>(props.ini || '--Select')
    const [isDropdown, setIsDropDown] = useState<Boolean>(false)
    const dropdownFor = props.for

 /* APPEND DATA */
    const dropdownItems = props.item || [
        'item01',
        'item02',
        'item03',
        'item04',
        'item05'
    ]

 /* FUNCTIONS */
    function handleHeader() {
        setIsDropDown(p => (!p))
    }

    function handleItems(txt: String) {
        setHeaderTxt(p => (txt ));
        setIsDropDown(p => (!p));

        props.fn1 && props.fn1(dropdownFor, txt)
    }

 /* APPEND */
    const APPENDITEMS = dropdownItems.map((it: String, id: number) => {
        return(
            <p key={id} onClick={e => handleItems(it)} className="items_p">
                {it}
            </p>
        )
    })

 /* STYLES */
    const mainStyle = {
        height: props.he,
        width: props.he,
        alignSelf: props.ai
    }

    const subStyle = {
        height: props.he,
        width: props.he,
    }

    
 /* RETURN */
    return(
        <main id="dropdown_comp_main" style={mainStyle}>
            <p id="header" onClick={handleHeader}>{headerTxt}</p>

            { isDropdown &&
              <div id="dropdown_box" style={subStyle}>
                {
                    APPENDITEMS
                }
              </div>
            }

        </main>
    )
}

export default DropDownComp