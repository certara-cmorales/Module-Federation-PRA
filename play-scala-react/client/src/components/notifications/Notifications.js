import React, {useEffect, useState} from "react";
import './Notifications.css';
import windowEventBridge from "../../services/WindowEventBridge";

const Notifications = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // subscribe to events from other apps
        windowEventBridge.subscribe('notification',(response) => setMessage(response));

        return () => {
            // unsubscribe from events of other apps
            windowEventBridge.unsubscribe('notification');
        };
    },[]);

    return <p className="message">{message}</p>;
};

export default Notifications;