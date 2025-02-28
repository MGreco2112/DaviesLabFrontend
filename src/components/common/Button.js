import React from 'react';

const Button = (props) => {

  return (
    <button
      id={props.id}
      className={props.className}
      type={props.type || "submit"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.disabled ? (
        props.children
      ) : (
        props.children
      )}
    </button>
  )

}



export default Button;