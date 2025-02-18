import logo from './logo.svg';
import './App.css';
import AngularRemoteApp from "./modules/AngularRemoteApp";
import SPMenu from "./components/SPMenu";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h4>Host</h4>
                <SPMenu></SPMenu>
            </header>
            <AngularRemoteApp></AngularRemoteApp>
        </div>
    );
}

export default App;
