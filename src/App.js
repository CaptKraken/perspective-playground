import Box from "./components/Box";

import Controls from "./components/Controls";
import Copy from "./components/Copy";

import cssStyle from "./App.module.css";
import DarkMode from "./components/DarkMode";
import { useContext } from "react";
import ValueContext from "./ValueContext";

function App() {
  const {
    values: { darkmode },
  } = useContext(ValueContext);

  const dark = darkmode ? "#231f20" : "#efe6dd";
  const fontclr = darkmode ? "#efe6dd" : "#231f20";
  return (
    <div
      style={{ backgroundColor: dark, color: fontclr }}
      className={cssStyle.appWrapper}
    >
      <DarkMode />
      <h1
        style={{
          backgroundColor: dark,
        }}
        className={cssStyle.appTitle}
      >
        Perspective Playground
      </h1>
      <div className={cssStyle.mainWrapper}>
        <Box />
        <Controls />
      </div>
      <Copy />
    </div>
  );
}

export default App;
