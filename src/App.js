import logo from "./logo.svg";
import "./App.css";

//  导入 Provider 包裹 App, 实现 store 共享
import { Provider } from 'react-redux'
import store from './components/reduxUse/store'

// import BaseUseDemo from "./components/baseUse";
// import AdvancedUse from "./components/advancedUse";
// import ReduxUse from './components/reduxUse'
import HooksUse from "./components/hooksUse";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <div className="main">
          {/* <BaseUseDemo /> */}
          {/* <hr /> */}
          {/* <AdvancedUse /> */}
          {/* <hr /> */}
          {/* <ReduxUse /> */}
          <hr />
          <HooksUse />
        </div>
      </div>
    </Provider>
  );
}

export default App;
