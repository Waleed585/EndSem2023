import { useState } from "react";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";

function App() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);
  let title = "";
  switch (selected) {
    case 0: {
      title = "dashboard";
      break;
    }
    case 1: {
      title = "test";
      break;
    }
    default: {
      title = "dashboard";
      break;
    }
  }
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar {...{ selected, setSelected, expanded, setExpaned }} />
        <MainDash {...{ title }} />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
