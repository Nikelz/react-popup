import React from "react";
import '../styles/popup.css';

function Popup(props) {
    return (props.trigger) ? (
        <div div className={props.trigger ? "popup active" : "popup"} onClick={() => props.setTrigger(false)}>
            <div className="popup__inner" onClick={e => e.stopPropagation()}>
                <button className="popup__close" onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;