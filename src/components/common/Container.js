import React, {CSSProperties} from "react";
import PropTypes from "prop-types";

const Container = (props) => {
    return (
        <div id={props.id} className={props.className} style={{...defaultStyle, ...props.style}}>
            {props.children}
        </div>
    )
}

const defaultStyle = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    width: '100%',
    
}

export default Container;