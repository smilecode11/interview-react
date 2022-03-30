import logo from "./logo.svg";
import "./App.css";

// import BaseUseDemo from "./components/baseUse";
// import AdvancedUse from "./components/advancedUse";
import ReduxUse from './components/reduxUse'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div className="main">
        {/* <BaseUseDemo /> */}
        {/* <hr /> */}
        {/* <AdvancedUse /> */}
        {/* <hr /> */}
        <ReduxUse />
      </div>
    </div>
  );
}

export default App;
