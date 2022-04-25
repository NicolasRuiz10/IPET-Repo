import './Button.css';

import React from 'react'

const Button = (props) => {
    function chamarFuncao() {
        props.clickButton();
    }
    return (   
        <button className="btn" onClick={chamarFuncao}>
            {props.btnTitle}
        </button>
    )
}

const ButtonVerde = (props) => {
    function chamarFuncao() {
        // setValue(e.target.value);
        props.clickButton();
    }
    return (
        <button className="btn-verde" onClick={chamarFuncao}>
            {props.title}
        </button>
    )
}

export {Button, ButtonVerde}



