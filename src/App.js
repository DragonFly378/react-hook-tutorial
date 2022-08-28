import logo from "./logo.svg";
import "./App.css";
// import HookCounterTwo from "./components/HookCounterTwo";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne /> */}
      <HookMouse />
    </div>
  );
}

export default App;
