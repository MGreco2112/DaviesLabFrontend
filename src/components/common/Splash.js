import React from "react";

const Splash = (props) => {

    return (
        <div style={{...defaultStyle,
            ...props.style}}
            id={props.id}
        >
            {props.children}
        </div>
    )
}

const defaultStyle = {
    display: "grid",
    height: '60vh',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    zIndex: 0,

}

export default Splash;