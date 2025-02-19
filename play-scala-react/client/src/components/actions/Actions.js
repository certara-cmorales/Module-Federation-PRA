import React from "react";
import './Actions.css';
import windowEventBridge from "../../services/WindowEventBridge";

const Actions = () => {
    const sendMessage = () => {
        // dispatch event to other apps
        windowEventBridge.dispatch('Window event dispatched from React')
    };
    return <button onClick={sendMessage}>Notify Remote</button>;
};

export default Actions;