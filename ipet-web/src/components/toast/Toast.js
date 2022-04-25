import React from 'react';
import './toast.css';
import { AiOutlineClose } from "react-icons/ai";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    function closeToast() {
        props.changeValueToast(false);
    }
    if (props.showToast === true) {
        setTimeout(() => {
            props.changeValueToast(false)
        }, 5000)
    }
    return (
        <div id="toast" className={props.color + " toast " + props.showToast}>
            <div className="flex justify-content-between align-center">
                <h3>{props.text}</h3>
                <AiOutlineClose onClick={closeToast}/>
            </div>
        </div>
    )
}