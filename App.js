import { useContext, useState } from "react";
// import Navbar from "./component/Navbar";
import LearnReducer from "./component/LearnReducer";
import LearnUseState from "./component/LearnUseState";
import LearnUseEffect from "./component/LearnUseEffect";
import LearnUseContext from "./component/useContext/LearnUseContext";

import { ThemeProvide } from "./component/useContext/ThemeProvide";
import Render from "./component/useContext/Render";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App mx-auto my-10">
      {/* <Navbar/> */}
      <LearnUseState />
      <LearnReducer />

      <div>
        <h1 className="ml-10 pb-10">LearnUseEffect</h1>
        <button className="border p-1 ml-10" onClick={() => setShow(!show)}>
          Tongle
        </button>
        {show && <LearnUseEffect />}
      </div>
      <ThemeProvide>
        <Render />
      </ThemeProvide>
    </div>
  );
}

export default App;
