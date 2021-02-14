import React from 'react';

function Button(props) {
    return (
        <div>
            <button onClick={props.onclickAction} id={props.buttonId} className={props.buttonClass}>{props.buttonName}</button>
        </div>
    );
}

export default Button;