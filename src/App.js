import Box from "./components/Box";
import { ValueContextProvider } from "./ValueContext";
import Controls from "./components/Controls";
import Copy from "./components/Copy";

import cssStyle from "./App.module.css";

function App() {
  return (
    <ValueContextProvider>
      <div className={cssStyle.appWrapper}>
        <h1 className={cssStyle.appTitle}>Perspective Playground</h1>
        <div className={cssStyle.mainWrapper}>
          <Box />
          <Controls />
        </div>
        <Copy />
      </div>
    </ValueContextProvider>
  );
}

export default App;
