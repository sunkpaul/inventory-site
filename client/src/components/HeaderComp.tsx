import React from "react";

function HeaderComp(props) {

 /* STYLES */
    const mainStyle = {
        height: props.he,
        width: props.wid,
        backgroundColor: props.bgc,
        textAlign: props.tal,
        marginTop: props.mt,
        position: props.pos,
        top: props.t,
        bottom: props.b,
        left: props.l,
        right: props.r
    }

    const subStyle = {

    }

 /* RETURN */
    return(
        <div id="header_comp_main" style={{...mainStyle}}>
            <h2>{props.header}</h2>
            <p>{props.subtxt}</p>
        </div>
    )
}

export default HeaderComp