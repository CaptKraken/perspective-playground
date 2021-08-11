import { useContext, useEffect } from "react";
import ValueContext from "../ValueContext";
import ToggleDarkMode from "./Buttons/ToggleDarkMode";

const DarkMode = () => {
  const {
    values: { darkmode },
    dispatch,
  } = useContext(ValueContext);

  useEffect(() => {
    localStorage.setItem("perspectivedarkmode", JSON.stringify(darkmode));
  }, [darkmode]);

  const handleToggle = () => {
    dispatch({ type: "toggleDarkMode" });
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "2rem",
        right: "2rem",
      }}
    >
      <ToggleDarkMode stretch rounded on={darkmode} toggleOn={handleToggle} />
    </div>
  );
};

export default DarkMode;
