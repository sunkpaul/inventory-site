import React from "react";
import '../assets/stylesheets/components.css'

interface childTy {
    txt: String,
    spacing?: String
}

function RowComponent(props) {

 /* VARIABLES */
    const childItems: childTy[] = props.children || []

 /* STYLE OBJECT */
    const mainStyle = {
        width: props.wid || null,
        height: props.he ,
        padding: props.pad || null
    }

    const subStyle = {
        borderRight2: props.bor ,
        height: props.he2 ,
        fontWight: props.fontWeight2 
    }


 /* APPEND  */
    const APPENDCHILDREN = childItems.map((it, id) => {
        return(
            <p 
                key={id} className="row_child" 
                style={{paddingRight: `${it.spacing}`, ...subStyle}}
            >
                {it.txt}
            </p>
        )
    })

 /* RETURN */
    return(
        <div style={mainStyle} id="row_comp_main">
            {
                APPENDCHILDREN
            }
        </div>
    )
}

export default RowComponent