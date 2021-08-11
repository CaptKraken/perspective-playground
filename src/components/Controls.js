import { useContext } from "react";
import ValueContext from "../ValueContext";
import Slider from "./Slider";
import cssStyle from "./Controls.module.css";

const Controls = () => {
  const {
    values: { perspective, rotateX, rotateY, rotateZ, darkmode },
    dispatch,
  } = useContext(ValueContext);

  const handleChange = (type, e) => {
    dispatch({ type, value: +e.target.value });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const bgc = darkmode ? "#443e40" : "#efe6dd";

  return (
    <div style={{ backgroundColor: bgc }} className={cssStyle.controls}>
      <div style={{ zIndex: 99, width: "100%" }}>
        <Slider
          name="perspective"
          min="0"
          max="999"
          value={perspective}
          onChange={(e) => handleChange("perspective", e)}
        />
        <Slider
          name="rotateX"
          min="-180"
          max="180"
          value={rotateX}
          onChange={(e) => handleChange("rotateX", e)}
        />
        <Slider
          name="rotateY"
          min="-180"
          max="180"
          value={rotateY}
          onChange={(e) => handleChange("rotateY", e)}
        />
        <Slider
          name="rotateZ"
          min="-180"
          max="180"
          value={rotateZ}
          onChange={(e) => handleChange("rotateZ", e)}
        />
      </div>

      <button className={cssStyle.resetBtn} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Controls;
