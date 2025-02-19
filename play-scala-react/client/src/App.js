import logo from './logo.svg';
import './App.css';
import AngularRemoteApp from "./modules/AngularRemoteApp";
import Notifications from "./components/notifications/Notifications";
import Actions from "./components/actions/Actions";
import {useEffect} from "react";
import windowEventBridge from "./services/WindowEventBridge";

function App() {

    useEffect(() => {
        // start listening events from other apps
        windowEventBridge.start();

        return () => {
            // stop listening events from other apps
            windowEventBridge.stop();
        };
    },[]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h4>Host</h4>
                <Actions></Actions>
                <Notifications></Notifications>
            </header>
            <AngularRemoteApp></AngularRemoteApp>
        </div>
    );
}

export default App;
